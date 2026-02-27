'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// Câu hỏi theo chương trình Việt Nam
const quizzes = {
  math: {
    1: [
      { q: 'Đâu là số lớn nhất?', options: ['5', '3', '8', '2'], answer: 2, explain: '8 lớn hơn 5, 3, 2' },
      { q: '2 + 3 = ?', options: ['4', '5', '6', '7'], answer: 1, explain: '2 + 3 = 5' },
      { q: '7 - 2 = ?', options: ['4', '5', '6', '7'], answer: 1, explain: '7 - 2 = 5' },
      { q: 'Có 4 cái kẹo, thêm 3 cái. Tổng mấy?', options: ['6', '7', '8', '5'], answer: 1, explain: '4 + 3 = 7' },
      { q: 'Hình nào có 3 cạnh?', options: ['Hình vuông', 'Hình tròn', 'Hình tam giác', 'Hình chữ nhật'], answer: 2, explain: 'Tam giác có 3 cạnh' },
    ],
    2: [
      { q: '5 x 2 = ?', options: ['8', '9', '10', '12'], answer: 2, explain: '5 nhân 2 bằng 10' },
      { q: '12 + 8 = ?', options: ['18', '19', '20', '21'], answer: 2, explain: '12 + 8 = 20' },
      { q: 'Hình nào có 4 cạnh bằng nhau?', options: ['Hình chữ nhật', 'Hình tam giác', 'Hình vuông', 'Hình tròn'], answer: 2, explain: 'Hình vuông có 4 cạnh bằng nhau' },
      { q: 'Bảng nhân 3: 3 x 4 = ?', options: ['9', '10', '11', '12'], answer: 3, explain: '3 x 4 = 12' },
      { q: '1dm = ? cm', options: ['5', '10', '15', '20'], answer: 1, explain: '1 đề-xi-mét = 10 xăng-ti-mét' },
    ],
    3: [
      { q: '24 : 4 = ?', options: ['4', '5', '6', '7'], answer: 2, explain: '24 chia 4 bằng 6' },
      { q: 'Một ngày có mấy giờ?', options: ['12', '20', '24', '30'], answer: 2, explain: 'Một ngày có 24 giờ' },
      { q: 'Đâu là số chẵn?', options: ['13', '17', '21', '24'], answer: 3, explain: '24 chia hết cho 2' },
      { q: '5 x 7 = ?', options: ['30', '35', '40', '45'], answer: 1, explain: '5 nhân 7 bằng 35' },
      { q: 'Chu vi hình vuông cạnh 3cm = ?', options: ['9cm', '10cm', '11cm', '12cm'], answer: 3, explain: 'Chu vi = 3 x 4 = 12cm' },
    ],
    4: [
      { q: '1/2 + 1/4 = ?', options: ['1/4', '2/4', '3/4', '1'], answer: 2, explain: '1/2 = 2/4, 2/4 + 1/4 = 3/4' },
      { q: 'Số nào là số thập phân?', options: ['3', '2.5', '1/2', '100'], answer: 1, explain: '2.5 là số thập phân' },
      { q: 'Góc nào là góc vuông?', options: ['30°', '45°', '90°', '120°'], answer: 2, explain: '90 độ là góc vuông' },
      { q: '25 x 4 = ?', options: ['80', '90', '100', '110'], answer: 2, explain: '25 x 4 = 100' },
      { q: '5000ml = ? lít', options: ['3', '4', '5', '6'], answer: 2, explain: '5000ml = 5 lít' },
    ],
    5: [
      { q: '25% của 200 là?', options: ['25', '50', '75', '100'], answer: 1, explain: '25% = 1/4, 200 : 4 = 50' },
      { q: 'Thể tích hộp 2cm x 3cm x 4cm = ?', options: ['20cm³', '24cm³', '28cm³', '30cm³'], answer: 1, explain: '2 x 3 x 4 = 24cm³' },
      { q: 'Quãng đường 100km, vận tốc 50km/h. Thời gian = ?', options: ['1h', '2h', '3h', '4h'], answer: 1, explain: '100 : 50 = 2 giờ' },
      { q: '3/5 = ?%', options: ['40%', '50%', '60%', '70%'], answer: 2, explain: '3/5 = 0.6 = 60%' },
      { q: 'Số thập phân nào lớn nhất?', options: ['2.45', '2.54', '2.5', '2.49'], answer: 1, explain: '2.54 lớn hơn các số khác' },
    ],
  },
  vietnam: {
    1: [
      { q: 'Chữ cái nào trong bảng chữ cái?', options: ['a', '1', '★', '@'], answer: 0, explain: 'a là chữ cái' },
      { q: 'Tiếng "bút" có mấy chữ cái?', options: ['2', '3', '4', '5'], answer: 1, explain: 'bút gồm b - ú - t (3 chữ cái)' },
      { q: 'Từ "mẹ" có mấy chữ cái?', options: ['2', '3', '4', '5'], answer: 0, explain: 'mẹ gồm m - ẹ (2 chữ cái)' },
      { q: 'Chữ in hoa A trông như thế nào?', options: ['△', '○', '□', 'A'], answer: 3, explain: 'A là chữ in hoa' },
      { q: 'Tiếng nào có vần "oa"?', options: ['bé', 'hoa', 'cá', 'đi'], answer: 1, explain: 'hoa có vần oa' },
    ],
    2: [
      { q: 'Từ "học sinh" có mấy tiếng?', options: ['1', '2', '3', '4'], answer: 1, explain: 'học - sinh (2 tiếng)' },
      { q: 'Từ nào là từ đơn?', options: ['bạn bè', 'học sinh', 'cô giáo', 'sách'], answer: 3, explain: 'sách là từ đơn (1 tiếng)' },
      { q: 'Câu "Em đi học" là câu gì?', options: ['Câu hỏi', 'Câu kể', 'Câu cảm', 'Câu chúc'], answer: 1, explain: 'Em đi học là câu kể' },
      { q: 'Từ chỉ hoạt động gọi là gì?', options: ['Danh từ', 'Động từ', 'Tính từ', 'Đại từ'], answer: 1, explain: 'Động từ chỉ hoạt động' },
      { q: 'Từ nào viết đúng chính tả?', options: ['xăng', 'săng', 'sắng', 'xắng'], answer: 0, explain: 'Xăng viết đúng chính tả' },
    ],
  },
  english: {
    1: [
      { q: 'Xin chào tiếng Anh là gì?', options: ['Hello', 'Goodbye', 'Thank you', 'Sorry'], answer: 0, explain: 'Hello = Xin chào' },
      { q: 'Số "One" bằng tiếng Việt là?', options: ['1', '2', '3', '4'], answer: 0, explain: 'One = Một = 1' },
      { q: 'Tạm biệt tiếng Anh là gì?', options: ['Hello', 'Goodbye', 'Please', 'Sorry'], answer: 1, explain: 'Goodbye = Tạm biệt' },
      { q: 'Màu xanh dương tiếng Anh là?', options: ['Red', 'Blue', 'Green', 'Yellow'], answer: 1, explain: 'Blue = Xanh dương' },
      { q: 'Con mèo tiếng Anh là?', options: ['Dog', 'Cat', 'Bird', 'Fish'], answer: 1, explain: 'Cat = Mèo' },
    ],
    2: [
      { q: '"Apple" nghĩa là gì?', options: ['Chuối', 'Táo', 'Cam', 'Nho'], answer: 1, explain: 'Apple = Táo' },
      { q: 'I ___ a student.', options: ['am', 'is', 'are', 'be'], answer: 0, explain: 'I am = Tôi là' },
      { q: 'What ___ your name?', options: ['am', 'is', 'are', 'do'], answer: 1, explain: 'What is = Gì' },
      { q: 'She ___ a book.', options: ['have', 'has', 'is', 'are'], answer: 1, explain: 'She has = Cô ấy có' },
      { q: 'Good ___! (Buổi sáng)', options: ['Evening', 'Morning', 'Night', 'Afternoon'], answer: 1, explain: 'Good Morning = Chào buổi sáng' },
    ],
    3: [
      { q: 'He ___ to school yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 2, explain: 'Quá khứ đơn: went' },
      { q: 'I ___ breakfast this morning.', options: ['eat', 'ate', 'eating', 'eaten'], answer: 1, explain: 'Quá khứ: ate' },
      { q: '"Beautiful" nghĩa là?', options: ['Xấu', 'Đẹp', 'Lớn', 'Nhỏ'], answer: 1, explain: 'Beautiful = Đẹp' },
      { q: 'She is ___ than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], answer: 1, explain: 'So sánh hơn: taller' },
      { q: 'Can you ___ English?', options: ['speak', 'spoke', 'speaking', 'speaks'], answer: 0, explain: 'Can + động từ nguyên mẫu: speak' },
    ],
  },
  tin: {
    3: [
      { q: 'Thiết bị nào dùng để di chuyển con trỏ?', options: ['Bàn phím', 'Chuột', 'Màn hình', 'Loa'], answer: 1, explain: 'Mouse (chuột) dùng để di chuyển con trỏ' },
      { q: 'Nhấn chuột 2 lần nhanh gọi là gì?', options: ['Click', 'Double click', 'Right click', 'Drag'], answer: 1, explain: 'Double click = Nhấn đúp' },
      { q: 'Phím nào dùng để gõ chữ?', options: ['Mouse', 'Keyboard', 'Monitor', 'CPU'], answer: 1, explain: 'Keyboard = Bàn phím' },
      { q: 'Màn hình máy tính tiếng Anh là?', options: ['Screen', 'Mouse', 'Keyboard', 'Printer'], answer: 0, explain: 'Screen = Màn hình' },
      { q: 'Máy tính cần gì để hoạt động?', options: ['Nước', 'Điện', 'Gió', 'Lửa'], answer: 1, explain: 'Máy tính cần điện' },
    ],
    4: [
      { q: 'Scratch là ngôn ngữ gì?', options: ['Văn bản', 'Trực quan kéo thả', 'Âm thanh', 'Hình ảnh'], answer: 1, explain: 'Scratch lập trình kéo thả' },
      { q: 'Nhân vật trong Scratch gọi là?', options: ['Sprite', 'Block', 'Stage', 'Script'], answer: 0, explain: 'Sprite = Nhân vật' },
      { q: 'Ctrl+C dùng để làm gì?', options: ['Dán', 'Cắt', 'Sao chép', 'Xóa'], answer: 2, explain: 'Ctrl+C = Copy = Sao chép' },
      { q: 'Word dùng để làm gì?', options: ['Tính toán', 'Soạn thảo', 'Trình chiếu', 'Lập trình'], answer: 1, explain: 'Word = Soạn thảo văn bản' },
      { q: 'Phần mềm vẽ tranh là?', options: ['Word', 'Excel', 'Paint', 'PowerPoint'], answer: 2, explain: 'Paint = Vẽ tranh' },
    ],
    5: [
      { q: 'PowerPoint dùng để làm gì?', options: ['Tính toán', 'Trình chiếu', 'Vẽ', 'Lập trình'], answer: 1, explain: 'PowerPoint trình chiếu' },
      { q: 'Trang trình chiếu gọi là?', options: ['Slide', 'Page', 'Sheet', 'File'], answer: 0, explain: 'Slide = Trang trình chiếu' },
      { q: 'Internet là gì?', options: ['Máy tính', 'Mạng toàn cầu', 'Phần mềm', 'Trò chơi'], answer: 1, explain: 'Internet = Mạng lưới toàn cầu' },
      { q: 'Không nên chia sẻ thông tin gì online?', options: ['Sở thích', 'Địa chỉ nhà', 'Tuổi', 'Trường học'], answer: 1, explain: 'Không chia sẻ địa chỉ nhà' },
      { q: 'Email dùng để làm gì?', options: ['Chơi game', 'Gửi thư', 'Vẽ tranh', 'Nghe nhạc'], answer: 1, explain: 'Email = Thư điện tử' },
    ],
  },
}

const subjectNames: Record<string, string> = {
  math: 'Toán',
  vietnam: 'Tiếng Việt',
  english: 'Tiếng Anh',
  tin: 'Tin học',
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
  const [showExplain, setShowExplain] = useState(false)

  if (questions.length === 0) {
    return (
      <div className="container" style={{textAlign: 'center', padding: '60px 20px'}}>
        <div style={{fontSize: '5rem', marginBottom: '20px'}}>😢</div>
        <h1>Chưa có câu hỏi cho môn này!</h1>
        <p style={{margin: '20px 0', color: '#9ca3af'}}>Đội ngũ đang cập nhật thêm câu hỏi...</p>
        <Link href="/dashboard" className="btn btn-primary">← Quay lại</Link>
      </div>
    )
  }

  const handleAnswer = (index: number) => {
    if (selected !== null) return
    
    setSelected(index)
    setShowExplain(true)
    
    if (index === questions[current].answer) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1)
        setSelected(null)
        setShowExplain(false)
      } else {
        setShowResult(true)
      }
    }, 2000)
  }

  if (showResult) {
    const percent = Math.round((score / questions.length) * 100)
    const resultEmoji = percent >= 80 ? '🏆' : percent >= 60 ? '🌟' : '💪'
    const resultMessage = percent >= 80 ? 'Xuất sắc! Bạn là thiên tài!' : percent >= 60 ? 'Làm tốt lắm! Tiếp tục cố gắng!' : 'Đừng nản! Luyện tập thêm nhé!'
    
    return (
      <div className="result-container">
        <div className="result-emoji">{resultEmoji}</div>
        <h1>Kết Quả!</h1>
        <div className="result-score">{score} / {questions.length}</div>
        <p className="result-message">{resultMessage}</p>
        <div style={{marginBottom: '30px'}}>
          <Link href={`/${subject}`} className="btn btn-secondary">Chơi lại</Link>
        </div>
        <Link href="/dashboard" className="btn btn-primary">🏠 Về Trang Chủ</Link>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <Link href={`/${subject}`} className="back-link">← Quay lại {subjectNames[subject]}</Link>
      
      {/* Progress */}
      <div className="quiz-progress">
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
          <span style={{fontWeight: '600'}}>Câu {current + 1} / {questions.length}</span>
          <span style={{color: '#fbbf24'}}>⭐ {score} điểm</span>
        </div>
        <div className="quiz-progress-bar">
          <div 
            className="quiz-progress-fill"
            style={{width: `${((current + 1) / questions.length) * 100}%`}}
          />
        </div>
      </div>

      {/* Star mascot */}
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
        <span style={{fontSize: '3rem'}}>🌟</span>
        <p style={{color: '#fbbf24', fontSize: '0.9rem'}}>Star đang theo dõi bạn!</p>
      </div>

      {/* Question */}
      <div className="quiz-question">
        <h3>{questions[current].q}</h3>
        
        <div className="quiz-options">
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              className={`quiz-option ${
                selected !== null
                  ? i === questions[current].answer
                    ? 'correct'
                    : i === selected
                    ? 'wrong'
                    : ''
                  : ''
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplain && (
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: selected === questions[current].answer 
              ? 'rgba(34, 197, 94, 0.2)' 
              : 'rgba(239, 68, 68, 0.2)',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{fontWeight: '600', marginBottom: '5px'}}>
              {selected === questions[current].answer ? '✅ Đúng rồi!' : '❌ Chưa đúng!'}
            </p>
            <p style={{color: '#9ca3af', fontSize: '0.9rem'}}>
              💡 {questions[current].explain}
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <Link href="/dashboard" className="btn btn-secondary">🏠 Về Trang Chủ</Link>
      </div>
    </div>
  )
}
