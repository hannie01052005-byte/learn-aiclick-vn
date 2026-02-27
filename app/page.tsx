'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const planets = [
  { id: 'math', name: 'Trái Đất', subject: 'Toán', icon: '🌍', color: 'blue', desc: 'Số học, hình học, đo lường' },
  { id: 'vietnam', name: 'Mặt Trăng', subject: 'Tiếng Việt', icon: '🌙', color: 'green', desc: 'Chữ cái, từ vựng, ngữ pháp' },
  { id: 'english', name: 'Englishia', subject: 'Tiếng Anh', icon: '⭐', color: 'yellow', desc: 'Từ vựng, phát âm, giao tiếp' },
  { id: 'tin', name: 'UFO Station', subject: 'Tin học', icon: '🚀', color: 'purple', desc: 'Lập trình, máy tính, internet' },
]

const features = [
  { icon: '🎮', title: 'Chơi Mà Học', desc: 'Gamification thú vị' },
  { icon: '🌟', title: 'Star Đồng Hành', desc: 'Nhân vật cute hỗ trợ' },
  { icon: '🧠', title: 'AI Thông Minh', desc: 'Học theo năng lực' },
  { icon: '🏆', title: 'Thử Thách', desc: 'Giải đố nhận thưởng' },
  { icon: '📈', title: 'Tiến Bộ', desc: 'Theo dõi sự tiến bộ' },
  { icon: '👨‍👩‍👧', title: 'Phụ Huynh', desc: 'Báo cáo cho cha mẹ' },
]

export default function Home() {
  const [stars, setStars] = useState<{id: number, left: string, top: string, duration: string}[]>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`
    }))
    setStars(newStars)
  }, [])

  return (
    <main>
      {/* Animated Stars */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>
      
      {/* Hero with Star */}
      <section className="hero">
        <div className="hero-emoji">🌟</div>
        <h1>Học Viện Vũ Trụ</h1>
        <p>Hành trình khám phá vũ trụ kiến thức cùng Star! ✨</p>
        <div className="hero-buttons">
          <Link href="/register" className="btn btn-primary">🚀 Bắt Đầu Ngay</Link>
          <Link href="/login" className="btn btn-secondary">Đăng Nhập</Link>
        </div>
      </section>

      {/* Star Mascot Introduction */}
      <section className="mascot-section">
        <div className="mascot-container">
          <div className="mascot-emoji">🌟</div>
          <div className="mascot-speech">
            <h2 style={{marginBottom: '15px', fontSize: '1.5rem'}}>Xin chào! Tôi là Star 🌟</h2>
            <p>Tôi sẽ đồng hành cùng các bạn trong hành trình chinh phục vũ trụ kiến thức!</p>
            <p style={{marginTop: '15px', color: '#fbbf24'}}>Cùng nhau khám phá nào! 🚀</p>
          </div>
        </div>
      </section>

      {/* Planets */}
      <section className="planets-section">
        <div className="container">
          <h2>🪐 <span style={{color: '#60a5fa'}}>Khám Phá</span> Các Hành Tinh</h2>
          <div className="planets-grid">
            {planets.map((p) => (
              <Link key={p.id} href={`/${p.id}`} className="planet-card">
                <div className="planet-icon">{p.icon}</div>
                <h3 className="planet-name">{p.name}</h3>
                <p className="planet-subject">{p.subject}</p>
                <p style={{marginTop: '10px', fontSize: '0.9rem', color: '#9ca3af'}}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>✨ <span style={{color: '#a78bfa'}}>Tính Năng</span> Đặc Biệt</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Sẵn Sàng <span style={{color: '#4ade80'}}>Khám Phá</span>?</h2>
        <p style={{fontSize: '1.3rem', marginBottom: '30px'}}>
          Đăng ký ngay để nhận <span style={{color: '#fbbf24', fontWeight: 'bold'}}>⭐ 100 Sao</span> miễn phí!
        </p>
        <Link href="/register" className="btn btn-primary" style={{fontSize: '1.3rem', padding: '20px 50px'}}>
          🚀 Đăng Ký Ngay
        </Link>
      </section>

      <footer>
        <p>© 2026 Học Viện Vũ Trụ - AIClick Vietnam</p>
      </footer>
    </main>
  )
}
