'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Dynamic import cho Cosmo (tránh SSR issues)
const Cosmo = dynamic(() => import('../components/Cosmo'), { 
  ssr: false,
  loading: () => <div className="cosmo-placeholder" />
})

const planets = [
  { id: 'math', name: 'Trái Đất', subject: 'Toán', icon: '🌍', color: 'blue', desc: 'Số học, hình học, đo lường' },
  { id: 'vietnam', name: 'Mặt Trăng', subject: 'Tiếng Việt', icon: '🌙', color: 'green', desc: 'Chữ cái, từ vựng, ngữ pháp' },
  { id: 'english', name: 'Englishia', subject: 'Tiếng Anh', icon: '⭐', color: 'yellow', desc: 'Từ vựng, phát âm, giao tiếp' },
  { id: 'tin', name: 'UFO Station', subject: 'Tin học', icon: '🚀', color: 'purple', desc: 'Lập trình, máy tính, internet' },
]

const features = [
  { icon: '🎮', title: 'Chơi Mà Học', desc: 'Gamification thú vị' },
  { icon: '🧠', title: 'AI Thông Minh', desc: 'Học theo năng lực' },
  { icon: '🏆', title: 'Thử Thách', desc: 'Giải đố nhận thưởng' },
  { icon: '📈', title: 'Tiến Bộ', desc: 'Theo dõi sự tiến bộ' },
  { icon: '👨‍👩‍👧', title: 'Phụ Huynh', desc: 'Báo cáo cho cha mẹ' },
  { icon: '🤖', title: 'Cosmo Đồng Hành', desc: 'Nhân vật cute hỗ trợ' },
]

export default function Home() {
  const [stars, setStars] = useState<{id: number, left: string, top: string, duration: string}[]>([])
  const [showCosmo, setShowCosmo] = useState(false)

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 3}s`
    }))
    setStars(newStars)
    
    // Show Cosmo after a short delay
    const timer = setTimeout(() => setShowCosmo(true), 500)
    return () => clearTimeout(timer)
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
      
      {/* Hero with Cosmo */}
      <section className="hero">
        {/* Cosmo Mascot */}
        {showCosmo && (
          <div className="hero-cosmo">
            <Cosmo 
              mood="excited" 
              size="xl"
              showMessage={true}
              customMessage="Xin chào! Tôi là Cosmo 🪐✨ Hãy cùng khám phá vũ trụ kiến thức nhé!"
            />
          </div>
        )}
        
        <div className="hero-content">
          <h1>Học Viện Vũ Trụ</h1>
          <p>Hành trình chinh phục vũ trụ kiến thức cùng Cosmo! 🚀</p>
          <div className="hero-buttons">
            <Link href="/register" className="btn btn-primary">🚀 Bắt Đầu Ngay</Link>
            <Link href="/login" className="btn btn-secondary">Đăng Nhập</Link>
          </div>
        </div>
      </section>

      {/* Cosmo Introduction */}
      <section className="mascot-section">
        <div className="container">
          <h2>🌟 <span style={{color: '#a78bfa'}}>Gặp Gỡ</span> Cosmo</h2>
          <div className="cosmo-intro-grid">
            <div className="cosmo-intro-card">
              <div className="cosmo-intro-emoji">🪐</div>
              <h3>Từ Đâu?</h3>
              <p>Cosmo đến từ hành tinh Slimeia xa xôi, đến Trái Đất để giúp các bạn học tập vui vẻ!</p>
            </div>
            <div className="cosmo-intro-card">
              <div className="cosmo-intro-emoji">💫</div>
              <h3>Tính Cách</h3>
              <p>Năng động, tích cực và luôn ủng hộ bạn. Cosmo không bao giờ chê bai ai!</p>
            </div>
            <div className="cosmo-intro-card">
              <div className="cosmo-intro-emoji">🎯</div>
              <h3>Sức Mạnh</h3>
              <p>Biết rất nhiều về Toán, Tiếng Việt, Tiếng Anh và Tin học. Sẵn sàng giảng dạy bất kỳ lúc nào!</p>
            </div>
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
