'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check auth status
    const checkAuth = async () => {
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl">⏳ Đang tải...</div>
      </div>
    )
  }

  const subjects = [
    { id: 'math', name: 'Toán', icon: '🌍', path: '/math' },
    { id: 'vietnam', name: 'Tiếng Việt', icon: '🌙', path: '/vietnam' },
    { id: 'english', name: 'Tiếng Anh', icon: '⭐', path: '/english' },
    { id: 'tin', name: 'Tin học', icon: '🚀', path: '/tin' },
  ]

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-2">👋 Xin chào, Phi hành gia!</h1>
      <p className="text-gray-400 mb-8">Sẵn sàng chinh phục vũ trụ?</p>

      <h2 className="text-xl font-bold mb-4">🪐 Chọn hành tinh để khám phá</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {subjects.map((s) => (
          <Link key={s.id} href={s.path} className="block bg-gray-800 border-2 border-blue-500 rounded-xl p-6 text-center hover:scale-105 transition">
            <div className="text-5xl mb-2">{s.icon}</div>
            <div className="font-bold">{s.name}</div>
            <div className="text-gray-400 text-sm">Lớp 1-5</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
