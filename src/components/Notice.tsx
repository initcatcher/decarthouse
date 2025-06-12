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
        {blogData?.posts.map((post) => (
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

      {blogData?.posts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>블로그 포스트가 없습니다.</p>
        </div>
      )}
    </motion.div>
  )
}

export default Notice
