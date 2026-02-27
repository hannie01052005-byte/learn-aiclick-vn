'use client'

import Link from 'next/link'

const grades = [
  { id: 1, name: 'Lớp 1', desc: 'Chữ cái, ghép vần, tập đọc' },
  { id: 2, name: 'Lớp 2', desc: 'Từ đơn, từ phức, viết câu' },
]

export default function VietnamPage() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{fontSize: '4rem'}}>🌙</div>
        <h1>🪐 Mặt Trăng - Tiếng Việt</h1>
        <p>Chọn lớp học để bắt đầu cuộc phiêu lưu!</p>
      </div>

      <div className="planets-grid">
        {grades.map((g) => (
          <Link key={g.id} href={`/quiz/vietnam/${g.id}`} className="planet-card">
            <div className="planet-icon">📖</div>
            <h3 className="planet-name">{g.name}</h3>
            <p className="planet-subject">{g.desc}</p>
          </Link>
        ))}
      </div>

      <div style={{textAlign: 'center', marginTop: '40px'}}>
        <Link href="/dashboard" className="btn btn-secondary">← Quay lại Dashboard</Link>
      </div>
    </div>
  )
}
