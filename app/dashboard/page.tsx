'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../../lib/auth-context'

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
      <div className="loading">⏳ Đang tải...</div>
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
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h1>👋 Xin chào, {user.email?.split('@')[0]}!</h1>
          <p>Sẵn sàng chinh phục vũ trụ?</p>
        </div>
        <button onClick={handleSignOut} className="logout-btn">🚪 Đăng xuất</button>
      </div>

      <h2 style={{fontSize: '1.3rem', marginBottom: '20px'}}>🪐 Chọn hành tinh để khám phá</h2>
      <div className="subjects-grid">
        {subjects.map((s) => (
          <Link key={s.id} href={s.path} className="subject-card">
            <div className="subject-icon">{s.icon}</div>
            <div className="subject-name">{s.name}</div>
            <div className="subject-desc">{s.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
