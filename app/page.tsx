'use client'

import Link from 'next/link'

const planets = [
  { id: 'math', name: 'Trái Đất', subject: 'Toán', icon: '🌍' },
  { id: 'vietnam', name: 'Mặt Trăng', subject: 'Tiếng Việt', icon: '🌙' },
  { id: 'english', name: 'Englishia', subject: 'Tiếng Anh', icon: '⭐' },
  { id: 'tin', name: 'UFO Station', subject: 'Tin học', icon: '🚀' },
]

const features = [
  { icon: '🎮', title: 'Gamification', desc: 'Nhập vai phi hành gia' },
  { icon: '🧠', title: 'AI Thông Minh', desc: 'Học theo năng lực' },
  { icon: '📊', title: 'Theo Dõi Tiến Độ', desc: 'Báo cáo cho phụ huynh' },
  { icon: '🏆', title: 'Phần Thưởng', desc: 'Thu thập sao, huy hiệu' },
  { icon: '🌟', title: 'Nhân Vật Cute', desc: 'Star người bạn đồng hành' },
  { icon: '🎵', title: 'Học Mà Chơi', desc: 'Bài học như trò chơi' },
]

export default function Home() {
  return (
    <main>
      <div className="stars" />
      
      {/* Hero */}
      <section className="hero">
        <div className="hero-emoji">🚀</div>
        <h1>Học Viện Vũ Trụ</h1>
        <p>Hành trình khám phá vũ trụ kiến thức cùng Star! 🌟</p>
        <div className="hero-buttons">
          <Link href="/register" className="btn btn-primary">🚀 Bắt Đầu Ngay - FREE</Link>
          <Link href="/login" className="btn btn-secondary">Đăng Nhập</Link>
        </div>
      </section>

      {/* Mascot */}
      <section className="mascot-section">
        <div className="mascot-emoji">👋</div>
        <h2>Xin chào! Tôi là <span style={{color: '#fbbf24'}}>Star</span> 🌟</h2>
        <p style={{maxWidth: '600px', margin: '0 auto'}}>
          Tôi sẽ đồng hành cùng các bạn trong hành trình chinh phục vũ trụ kiến thức!
        </p>
      </section>

      {/* Planets */}
      <section className="planets-section">
        <div className="container">
          <h2 style={{textAlign: 'center'}}>🪐 <span style={{color: '#60a5fa'}}>Khám Phá</span> Các Hành Tinh</h2>
          <div className="planets-grid">
            {planets.map((p) => (
              <div key={p.id} className="planet-card">
                <div className="planet-icon">{p.icon}</div>
                <h3 className="planet-name">{p.name}</h3>
                <p className="planet-subject">{p.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 style={{textAlign: 'center'}}>✨ <span style={{color: '#a78bfa'}}>Tính Năng</span> Đặc Biệt</h2>
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
        <p>Đăng ký ngay để nhận <span style={{color: '#fbbf24', fontWeight: 'bold'}}>7 ngày Premium FREE</span>!</p>
        <Link href="/register" className="btn btn-primary" style={{fontSize: '1.2rem', padding: '18px 40px'}}>🚀 Đăng Ký Ngay</Link>
      </section>

      <footer>
        <p>© 2026 Học Viện Vũ Trụ - AIClick Vietnam</p>
      </footer>
    </main>
  )
}
