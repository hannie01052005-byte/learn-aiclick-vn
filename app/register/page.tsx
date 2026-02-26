'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Tính năng đang phát triển!')
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🚀</div>
          <h1 className="text-3xl font-bold">Đăng Ký</h1>
          <p className="text-gray-400">Trở thành phi hành gia ngay hôm nay!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Họ và tên</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg" placeholder="Nguyễn Văn A" required />
          </div>

          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg" placeholder="email@example.com" required />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Mật khẩu</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg" placeholder="••••••••" required minLength={6} />
          </div>

          <button type="submit" className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg font-bold">
            🚀 Đăng Ký Ngay
          </button>

          <p className="text-center text-gray-400 mt-6">
            Đã có tài khoản? <Link href="/login" className="text-blue-400 hover:underline">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
