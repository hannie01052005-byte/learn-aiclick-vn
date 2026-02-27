'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../lib/auth-context'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { signIn } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)
    
    if (error) {
      setError(error.message === 'Invalid login credentials' ? 'Email hoặc mật khẩu không đúng!' : error.message)
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">
          <div className="form-header-emoji">🌟</div>
          <h1>Đăng Nhập</h1>
          <p>Chào mừng phi hành gia trở lại!</p>
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              required 
            />
          </div>

          <button type="submit" disabled={loading} className="form-submit">
            {loading ? '⏳ Đang đăng nhập...' : '🚀 Đăng Nhập'}
          </button>

          <div className="form-footer">
            Chưa có tài khoản? <Link href="/register">Đăng ký ngay</Link>
          </div>
        </form>

        <div style={{textAlign: 'center', marginTop: '20px'}}>
          <Link href="/" style={{color: '#9ca3af', fontSize: '0.9rem'}}>← Về trang chủ</Link>
        </div>
      </div>
    </div>
  )
}
