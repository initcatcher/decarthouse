'use client'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const SmartStore = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="block md:hidden w-full text-center">
      <Button
        asChild
        variant="default"
        className="bg-[#03C75A] text-white hover:bg-[#02B14F] font-medium rounded-lg shadow-md transition px-6 py-3 w-full"
      >
        <a
          href="https://naver.me/FDQheUjd"
          target="_blank"
          rel="noopener noreferrer"
        >
          스마트 스토어 바로가기
        </a>
      </Button>
    </div>
  )
}

export default SmartStore
