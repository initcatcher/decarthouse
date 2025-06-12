'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface BlogPost {
  title: string
  url: string
  date: string
  logNo: string
}

interface BlogData {
  lastUpdated: string
  blogId: string
  totalPosts: number
  posts: BlogPost[]
}

const Notice = () => {
  const [blogData, setBlogData] = useState<BlogData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 5

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/blog-data/post_list.json')
        if (!response.ok) {
          throw new Error('블로그 데이터를 불러올 수 없습니다')
        }
        const data: BlogData = await response.json()
        setBlogData(data)
      } catch (err) {
        setError(
          err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다'
        )
      } finally {
        setLoading(false)
      }
    }

    fetchBlogData()
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const handlePostClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  // 최신글부터 정렬하고 페이지네이션 로직
  const sortedPosts =
    blogData?.posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }) || []

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = sortedPosts.slice(startIndex, endIndex)

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  const handlePageClick = (page: number) => {
    setCurrentPage(page)
  }

  if (loading) {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl mb-6">최신 블로그</h1>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="border-b pb-4 animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl mb-6">최신 블로그</h1>
        <div className="text-red-500 text-center py-8">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      className="container mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl">최신 블로그</h1>
        {blogData?.lastUpdated && (
          <p className="text-sm text-gray-500">
            마지막 업데이트:{' '}
            {new Date(blogData.lastUpdated).toLocaleDateString('ko-KR')}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {currentPosts.map((post) => (
          <motion.div
            key={post.logNo}
            className="border-b pb-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200 p-3 rounded-lg"
            variants={itemVariants}
            onClick={() => handlePostClick(post.url)}
          >
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-base text-gray-800 mt-2 hover:text-blue-600 transition-colors">
              {post.title}
            </p>
            <div className="flex items-center mt-2 text-sm text-blue-500">
              <span>블로그에서 읽기</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 페이지네이션 UI */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            이전
          </button>

          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            다음
          </button>
        </div>
      )}

      {/* 페이지 정보 */}
      {sortedPosts.length > 0 && (
        <div className="text-center mt-4 text-sm text-gray-500">
          총 {sortedPosts.length}개의 포스트 중 {startIndex + 1}-
          {Math.min(endIndex, sortedPosts.length)}번째 표시
        </div>
      )}

      {sortedPosts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>블로그 포스트가 없습니다.</p>
        </div>
      )}
    </motion.div>
  )
}

export default Notice
