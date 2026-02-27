'use client'

import Link from 'next/link'

const grades = [
  { id: 1, name: 'Lớp 1', desc: 'Số đếm 0-10, cộng trừ trong phạm vi 10' },
  { id: 2, name: 'Lớp 2', desc: 'Số hạng, tổng, bảng nhân 2,3,4,5' },
  { id: 3, name: 'Lớp 3', desc: 'Nhân chia ngoài bảng, xem đồng hồ' },
  { id: 4, name: 'Lớp 4', desc: 'Phân số, số thập phân, góc nhọn' },
  { id: 5, name: 'Lớp 5', desc: 'Tỉ số %, hình hộp chữ nhật, thể tích' },
]

export default function MathPage() {
  return (
    <div className="container">
      <div style={{textAlign: 'center', marginBottom: '40px'}}>
        <div style={{fontSize: '4rem'}}>🌍</div>
        <h1>🪐 Trái Đất - Toán</h1>
        <p>Chọn lớp học để bắt đầu cuộc phiêu lưu!</p>
      </div>

      <div className="planets-grid">
        {grades.map((g) => (
          <Link key={g.id} href={`/quiz/math/${g.id}`} className="planet-card">
            <div className="planet-icon">📚</div>
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
