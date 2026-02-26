'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../lib/auth-context'

export default function Dashboard() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    await signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">⏳ Đang tải...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const subjects = [
    { id: 'math', name: 'Toán', icon: '🌍', path: '/math', desc: 'Số đếm, phép cộng trừ, bảng nhân' },
    { id: 'vietnam', name: 'Tiếng Việt', icon: '🌙', path: '/vietnam', desc: 'Chữ cái, từ câu, văn miêu tả' },
    { id: 'english', name: 'Tiếng Anh', icon: '⭐', path: '/english', desc: 'Alphabet, từ vựng, ngữ pháp' },
    { id: 'tin', name: 'Tin học', icon: '🚀', path: '/tin', desc: 'Keyboard, Scratch, PowerPoint' },
  ]

  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">👋 Xin chào, {user.email?.split('@')[0]}!</h1>
          <p className="text-gray-400">Sẵn sàng chinh phục vũ trụ?</p>
        </div>
        <button onClick={handleSignOut} className="px-4 py-2 bg-red-500/20 border border-red-500 rounded-lg hover:bg-red-500/30">
          🚪 Đăng xuất
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">🪐 Chọn hành tinh để khám phá</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subjects.map((s) => (
          <Link key={s.id} href={s.path} className="block bg-gray-800 border-2 border-blue-500 rounded-xl p-6 text-center hover:scale-105 transition">
            <div className="text-5xl mb-2">{s.icon}</div>
            <div className="font-bold">{s.name}</div>
            <div className="text-gray-400 text-sm">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
