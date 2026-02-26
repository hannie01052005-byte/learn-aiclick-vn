'use client'

import Link from 'next/link'

const planets = [
  { id: 'math', name: 'Trái Đất', subject: 'Toán', icon: '🌍', color: 'blue' },
  { id: 'vietnam', name: 'Mặt Trăng', subject: 'Tiếng Việt', icon: '🌙', color: 'green' },
  { id: 'english', name: 'Englishia', subject: 'Tiếng Anh', icon: '⭐', color: 'yellow' },
  { id: 'tin', name: 'UFO Station', subject: 'Tin học', icon: '🚀', color: 'purple' },
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
    <main className="min-h-screen">
      <div className="stars" />
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="text-7xl mb-6">🚀</div>
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          Học Viện Vũ Trụ
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Hành trình khám phá vũ trụ kiến thức cùng Star! 🌟
        </p>
        <div className="flex gap-4">
          <Link href="/register" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold">
            🚀 Bắt Đầu Ngay - FREE
          </Link>
          <Link href="/login" className="px-8 py-4 border-2 border-gray-500 rounded-full font-bold hover:border-gray-300">
            Đăng Nhập
          </Link>
        </div>
      </section>

      {/* Mascot */}
      <section className="py-20 px-4 text-center bg-black/20">
        <div className="text-8xl mb-4">👋</div>
        <h2 className="text-3xl font-bold mb-4">
          Xin chào! Tôi là <span className="text-yellow-400">Star</span> 🌟
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Tôi sẽ đồng hành cùng các bạn trong hành trình chinh phục vũ trụ kiến thức!
        </p>
      </section>

      {/* Planets */}
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          🪐 <span className="text-blue-400">Khám Phá</span> Các Hành Tinh
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {planets.map((p) => (
            <div key={p.id} className={`bg-gray-900/50 border-2 border-${p.color}-500 rounded-2xl p-6 text-center hover:scale-105 transition`}>
              <div className="text-6xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`text-${p.color}-400`}>{p.subject}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-black/20">
        <h2 className="text-4xl font-bold text-center mb-12">
          ✨ <span className="text-purple-400">Tính Năng</span> Đặc Biệt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Sẵn Sàng <span className="text-green-400">Khám Phá</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Đăng ký ngay để nhận <span className="text-yellow-400 font-bold">7 ngày Premium FREE</span>!
        </p>
        <Link href="/register" className="px-12 py-5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full text-xl font-bold">
          🚀 Đăng Ký Ngay
        </Link>
      </section>

      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 Học Viện Vũ Trụ - AIClick Vietnam</p>
      </footer>
    </main>
  )
}
