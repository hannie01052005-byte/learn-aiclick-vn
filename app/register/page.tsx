'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../lib/auth-context'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()
  const { signUp } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signUp(email, password, name)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
    }
  }

  if (success) {
    return (
      <div className="form-container">
        <div className="form-box success-message">
          <div className="success-emoji">✅</div>
          <h1 style={{fontSize: '2rem', marginBottom: '15px'}}>Đăng ký thành công!</h1>
          <p style={{marginBottom: '25px'}}>Vui lòng kiểm tra email để xác nhận tài khoản.</p>
          <Link href="/login" style={{color: '#60a5fa'}}>Đăng nhập ngay</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-header">
          <div className="form-header-emoji">🚀</div>
          <h1>Đăng Ký</h1>
          <p>Trở thành phi hành gia ngay hôm nay!</p>
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-group">
            <label>Họ và tên</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              placeholder="Nguyễn Văn A" 
              required 
            />
          </div>

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
              minLength={6} 
            />
          </div>

          <button type="submit" disabled={loading} className="form-submit">
            {loading ? '⏳ Đang đăng ký...' : '🚀 Đăng Ký Ngay'}
          </button>

          <div className="form-footer">
            Đã có tài khoản? <Link href="/login">Đăng nhập</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
