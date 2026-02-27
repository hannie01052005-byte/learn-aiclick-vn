'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

const quizzes = {
  math: {
    1: [
      { q: '1 + 1 = ?', options: ['1', '2', '3', '4'], answer: 1 },
      { q: '3 + 2 = ?', options: ['4', '5', '6', '7'], answer: 1 },
      { q: '5 - 2 = ?', options: ['2', '3', '4', '5'], answer: 1 },
      { q: '4 + 3 = ?', options: ['6', '7', '8', '9'], answer: 1 },
      { q: '7 - 3 = ?', options: ['3', '4', '5', '6'], answer: 1 },
    ],
    2: [
      { q: '2 x 3 = ?', options: ['4', '5', '6', '7'], answer: 2 },
      { q: '5 x 2 = ?', options: ['8', '9', '10', '11'], answer: 2 },
      { q: '12 + 15 = ?', options: ['25', '26', '27', '28'], answer: 2 },
      { q: '20 - 8 = ?', options: ['10', '11', '12', '13'], answer: 2 },
      { q: '3 x 4 = ?', options: ['10', '11', '12', '13'], answer: 2 },
    ],
    3: [
      { q: '24 : 4 = ?', options: ['4', '5', '6', '7'], answer: 2 },
      { q: '100 + 250 = ?', options: ['340', '350', '360', '370'], answer: 1 },
      { q: '7 x 8 = ?', options: ['54', '55', '56', '57'], answer: 2 },
      { q: '500 - 125 = ?', options: ['365', '375', '385', '395'], answer: 1 },
      { q: '9 x 6 = ?', options: ['52', '53', '54', '55'], answer: 2 },
    ],
    4: [
      { q: '1/2 + 1/4 = ?', options: ['1/4', '2/4', '3/4', '1'], answer: 2 },
      { q: '3.5 + 2.1 = ?', options: ['5.4', '5.5', '5.6', '5.7'], answer: 2 },
      { q: '10 x 0.5 = ?', options: ['4', '5', '6', '7'], answer: 1 },
      { q: '100 : 4 = ?', options: ['20', '25', '30', '35'], answer: 1 },
      { q: '2/3 - 1/3 = ?', options: ['0', '1/3', '2/3', '1'], answer: 1 },
    ],
    5: [
      { q: '25% của 200 = ?', options: ['25', '50', '75', '100'], answer: 1 },
      { q: '3/5 = ?%', options: ['40%', '50%', '60%', '70%'], answer: 2 },
      { q: 'Thể tích hộp 2x3x4 = ?', options: ['24', '22', '20', '18'], answer: 0 },
      { q: 'Vận tốc 100km/2h = ?', options: ['40km/h', '50km/h', '60km/h', '70km/h'], answer: 1 },
      { q: '1.5 + 2.25 = ?', options: ['3.5', '3.65', '3.75', '3.85'], answer: 2 },
    ],
  },
  vietnam: {
    1: [
      { q: 'Chữ cái đầu tiên trong bảng alphabet?', options: ['A', 'B', 'C', 'Z'], answer: 0 },
      { q: 'Con gì có 4 chân?', options: ['Cá', 'Chó', 'Chim', 'Cua'], answer: 1 },
      { q: 'Mùa nào nóng nhất?', options: ['Xuân', 'Hè', 'Thu', 'Đông'], answer: 1 },
      { q: 'Con vật kêu "meo meo"?', options: ['Chó', 'Mèo', 'Bò', 'Gà'], answer: 1 },
      { q: 'Màu xanh da trời gọi là?', options: ['Xanh lá', 'Xanh dương', 'Xanh lục', 'Xanh lam'], answer: 1 },
    ],
    2: [
      { q: 'Từ "học sinh" có mấy tiếng?', options: ['1', '2', '3', '4'], answer: 1 },
      { q: 'Từ nào là từ đơn?', options: ['Bạn bè', 'Học sinh', 'Má', 'Táo'], answer: 2 },
      { q: 'Câu "Em đi học" thuộc loại câu gì?', options: ['Câu kể', 'Câu hỏi', 'Câu cảm', 'Câu chúc'], answer: 0 },
      { q: 'Từ chỉ sự vật gọi là?', options: ['Động từ', 'Tính từ', 'Danh từ', 'Đại từ'], answer: 2 },
      { q: 'Từ nào viết đúng chính tả?', options: ['xăng', 'săng', 'sắng', 'xắng'], answer: 0 },
    ],
  },
  english: {
    1: [
      { q: 'Hello nghĩa là gì?', options: ['Tạm biệt', 'Xin chào', 'Cảm ơn', 'Xin lỗi'], answer: 1 },
      { q: 'Số "One" bằng bao nhiêu?', options: ['1', '2', '3', '4'], answer: 0 },
      { q: 'Goodbye nghĩa là gì?', options: ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], answer: 1 },
      { q: 'Màu "Blue" là màu gì?', options: ['Đỏ', 'Xanh dương', 'Vàng', 'Xanh lá'], answer: 1 },
      { q: '"Cat" là con gì?', options: ['Chó', 'Mèo', 'Cá', 'Chim'], answer: 1 },
    ],
    2: [
      { q: '"Apple" nghĩa là gì?', options: ['Chuối', 'Táo', 'Cam', 'Nho'], answer: 1 },
      { q: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], answer: 0 },
      { q: 'What ___ your name?', options: ['am', 'is', 'are', 'do'], answer: 1 },
      { q: '"House" nghĩa là gì?', options: ['Trường', 'Nhà', 'Cửa', 'Cây'], answer: 1 },
      { q: 'She ___ a book.', options: ['have', 'has', 'is', 'are'], answer: 1 },
    ],
    3: [
      { q: 'He ___ to school yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 2 },
      { q: 'I ___ breakfast this morning.', options: ['eat', 'ate', 'eating', 'eaten'], answer: 1 },
      { q: '"Beautiful" nghĩa là gì?', options: ['Xấu', 'Đẹp', 'Lớn', 'Nhỏ'], answer: 1 },
      { q: 'She is ___ than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 1 },
      { q: 'Can you ___ English?', options: ['speak', 'spoke', 'speaking', 'speaks'], answer: 0 },
    ],
  },
  tin: {
    3: [
      { q: 'Con chuột máy tính gọi là gì?', options: ['Mouse', 'Keyboard', 'Monitor', 'Speaker'], answer: 0 },
      { q: 'Phím nào dùng để gõ chữ?', options: ['Mouse', 'Keyboard', 'Monitor', 'Printer'], answer: 1 },
      { q: 'Màn hình máy tính gọi là gì?', options: ['Screen', 'Mouse', 'Keyboard', 'CPU'], answer: 0 },
      { q: 'Nhấn chuột 2 lần gọi là gì?', options: ['Click', 'Double click', 'Right click', 'Drag'], answer: 1 },
      { q: 'Máy tính cần gì để hoạt động?', options: ['Nước', 'Điện', 'Gió', 'Lửa'], answer: 1 },
    ],
    4: [
      { q: 'Scratch là ngôn ngữ lập trình gì?', options: ['Văn bản', 'Trực quan kéo thả', 'Âm thanh', 'Hình ảnh'], answer: 1 },
      { q: 'Trong Scratch, nhân vật gọi là gì?', options: ['Sprite', 'Block', 'Stage', 'Script'], answer: 0 },
      { q: 'Paint dùng để làm gì?', options: ['Nghe nhạc', 'Vẽ tranh', 'Soạn thảo', 'Tính toán'], answer: 1 },
      { q: 'Word là phần mềm gì?', options: ['Bảng tính', 'Soạn thảo', 'Trình chiếu', 'Game'], answer: 1 },
      { q: 'Ctrl+C dùng để làm gì?', options: ['Dán', 'Cắt', 'Sao chép', 'Xóa'], answer: 2 },
    ],
    5: [
      { q: 'PowerPoint dùng để làm gì?', options: ['Tính toán', 'Trình chiếu', 'Vẽ', 'Lập trình'], answer: 1 },
      { q: 'Slide trong PowerPoint là gì?', options: ['Trang', 'Điểm', 'Hình', 'Màu'], answer: 0 },
      { q: 'Internet là gì?', options: ['Máy tính', 'Mạng lưới toàn cầu', 'Phần mềm', 'Trò chơi'], answer: 1 },
      { q: 'Không nên chia sẻ thông tin gì online?', options: ['Sở thích', 'Địa chỉ nhà', 'Sở trường', 'Tuổi'], answer: 1 },
      { q: 'Email dùng để làm gì?', options: ['Chơi game', 'Gửi thư điện tử', 'Vẽ tranh', 'Nghe nhạc'], answer: 1 },
    ],
  },
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const subject = params.subject as string
  const grade = parseInt(params.grade as string)

  const questions = quizzes[subject as keyof typeof quizzes]?.[grade] || []

  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selected, setSelected] = useState<number | null>(null)

  if (questions.length === 0) {
    return (
      <div className="container" style={{textAlign: 'center', padding: '40px'}}>
        <h1>Chưa có câu hỏi cho môn này!</h1>
        <Link href="/dashboard" className="btn btn-primary" style={{marginTop: '20px'}}>
          ← Quay lại
        </Link>
      </div>
    )
  }

  const handleAnswer = (index: number) => {
    setSelected(index)
    if (index === questions[current].answer) {
      setScore(score + 1)
    }
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1)
        setSelected(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  if (showResult) {
    const percent = Math.round((score / questions.length) * 100)
    return (
      <div className="container" style={{textAlign: 'center', padding: '40px'}}>
        <div style={{fontSize: '5rem'}}>{percent >= 80 ? '🏆' : percent >= 50 ? '👍' : '💪'}</div>
        <h1>Kết quả!</h1>
        <p style={{fontSize: '2rem', margin: '20px 0'}}>
          {score} / {questions.length} ({percent}%)
        </p>
        <p>{percent >= 80 ? 'Xuất sắc! Tiếp tục phát triển nhé!' : percent >= 50 ? 'Làm tốt lắm! Cố gắng thêm nhé!' : 'Đừng nản! Luyện tập thêm nhé!'}</p>
        <div style={{marginTop: '30px'}}>
          <Link href="/dashboard" className="btn btn-primary">Chơi lại</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{maxWidth: '600px', padding: '40px 20px'}}>
      <div style={{marginBottom: '20px'}}>
        <Link href="/dashboard" style={{color: '#9ca3af'}}>← Quay lại</Link>
      </div>
      
      <div style={{textAlign: 'center', marginBottom: '30px'}}>
        <h2>Câu {current + 1} / {questions.length}</h2>
        <div style={{background: '#374151', height: '8px', borderRadius: '4px', marginTop: '10px'}}>
          <div style={{
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            height: '100%',
            width: `${((current + 1) / questions.length) * 100}%`,
            borderRadius: '4px',
            transition: 'width 0.3s'
          }} />
        </div>
      </div>

      <div className="form-card" style={{padding: '30px'}}>
        <h3 style={{marginBottom: '25px', fontSize: '1.3rem'}}>{questions[current].q}</h3>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              style={{
                padding: '15px 20px',
                borderRadius: '10px',
                border: selected === i 
                  ? (i === questions[current].answer ? '2px solid #22c55e' : '2px solid #ef4444')
                  : '2px solid #4b5563',
                background: selected === i
                  ? (i === questions[current].answer ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)')
                  : 'rgba(55, 65, 81, 0.5)',
                color: 'white',
                cursor: selected !== null ? 'default' : 'pointer',
                fontSize: '1rem',
                textAlign: 'left',
                transition: 'all 0.2s'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
