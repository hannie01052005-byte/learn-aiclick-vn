'use client'

import Link from 'next/link'

const grades = [
  { id: 1, name: 'Lớp 1', desc: 'Alphabet, số đếm, greetings' },
  { id: 2, name: 'Lớp 2', desc: 'Từ vựng cơ bản, colors, animals' },
  { id: 3, name: 'Lớp 3', desc: '150-200 từ, be, have, can' },
]

export default function EnglishPage() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{fontSize: '4rem'}}>⭐</div>
        <h1>🪐 Englishia - Tiếng Anh</h1>
        <p>Chọn lớp học để bắt đầu cuộc phiêu lưu!</p>
      </div>

      <div className="planets-grid">
        {grades.map((g) => (
          <Link key={g.id} href={`/quiz/english/${g.id}`} className="planet-card">
            <div className="planet-icon">📝</div>
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
