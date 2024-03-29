'use client'
import React from 'react'
import Info from '@/app/content/contentInfo'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
   const router = useRouter()
   useEffect (() => {
    const token = sessionStorage.getItem("token")
    if (!token) {
      location.href = "/login"
    }
   }, [router])

  return (
    <div>
      <div>
        <Info />
      </div>
    </div>
  )
}

export default Page