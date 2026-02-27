'use client'

import Link from 'next/link'

const grades = [
  { id: 3, name: 'Lớp 3', desc: 'Làm quen máy tính, Mouse, bàn phím' },
  { id: 4, name: 'Lớp 4', desc: 'Scratch nâng cao, Paint, Word' },
  { id: 5, name: 'Lớp 5', desc: 'PowerPoint, Internet an toàn' },
]

export default function TinPage() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{fontSize: '4rem'}}>🚀</div>
        <h1>🪐 UFO Station - Tin học</h1>
        <p>Chọn lớp học để bắt đầu cuộc phiêu lưu!</p>
      </div>

      <div className="planets-grid">
        {grades.map((g) => (
          <Link key={g.id} href={`/quiz/tin/${g.id}`} className="planet-card">
            <div className="planet-icon">💻</div>
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
