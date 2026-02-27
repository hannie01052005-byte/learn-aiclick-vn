'use client'

import React, { useState, useEffect } from 'react'

// ===== COSMO THE COSMIC SLIME =====
// Mascot chính thức của Học Viện Vũ Trụ

export interface CosmoMood {
  happy: string    // Vui
  excited: string  // Hào hứng  
  thinking: string // Đang suy nghĩ
  sad: string      // Buồn
  proud: string    // Tự hào
  confused: string // Bối rối
  wink: string     // Nháy mắt
  love: string     // Yêu thương
}

export const cosmoMoods: CosmoMood = {
  happy: '😊',
  excited: '🤩',
  thinking: '🤔',
  sad: '😢',
  proud: '🥳',
  confused: '😵‍💫',
  wink: '😉',
  love: '🥰'
}

// Message templates cho từng tình huống
export const cosmoMessages = {
  welcome: [
    "Chào bạn! Tôi là Cosmo 🪐✨",
    "Woohoo! Rất vui được gặp bạn! 🎉",
    "Àlooo! Cosmo đã chờ bạn mãi! 🌟"
  ],
  greeting: [
    "Chào buổi sáng! Hôm nay học gì nào? ☀️",
    "Chào buổi chiều! Sẵn sàng chưa? 🌤️",
    "Chào buổi tối! Học tiếp thôi! 🌙"
  ],
  startQuiz: [
    "Cùng khám phá nào! 🔍",
    "Câu hỏi đầu tiên nè! Bắt đầu! 🚀",
    "Để xem bạn biết gì nhé! 💫"
  ],
  correct: [
    "Giỏi quá! ⭐⭐⭐",
    "Chuẩn rồi! Bạn thông minh lắm! 🧠",
    "Đúng rồi! Cosmo vui quá! 🎊"
  ],
  wrong: [
    "Ối! Thử lại nhé, mình tin bạn! 💪",
    "Chưa đúng! Nhưng đừng bỏ cuộc! 🌈",
    "Hmm... gần rồi! Cố lên! 🔄"
  ],
  hint: [
    "Gợi ý nè: 💡",
    "Thử suy nghĩ khác xem? 🤔",
    "Hmmm... có thể bạn cần xem lại bài nhé! 📚"
  ],
  complete: [
    "XONG RỒI! Bạn siêu quá! 🏆",
    "Chúc mừng! Bạn đã làm được! 🎉",
    "Tuyệt vời! Cosmo biết bạn làm được! 🌟"
  ],
  progress: [
    "Bạn đang tiến bộ rất nhanh! 📈",
    "Tuyệt! Tiếp tục như vậy nhé! 🚀",
    "Ơn giời! Bạn học siêu nhanh! ⚡"
  ],
  encourage: [
    "Cố lên! Bạn làm được! 💪",
    "Đừng nản! Cosmo ở đây! 🤗",
    "Mỗi người đều có thể học được! 🌱"
  ],
  goodbye: [
    "Tạm biệt! Hẹn gặp lại nhé! 👋",
    "Bye bye! Học tiếp nha! ✨",
    "Ngày tốt lành! 🎈"
  ]
}

// Props cho Cosmo component
interface CosmoProps {
  mood?: keyof CosmoMood
  message?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  showMessage?: boolean
  customMessage?: string
  position?: 'floating' | 'fixed'
  onClick?: () => void
}

// Helper lấy random message
export function getRandomMessage(category: keyof typeof cosmoMessages): string {
  const messages = cosmoMessages[category]
  return messages[Math.floor(Math.random() * messages.length)]
}

// Cosmo Character Component
export default function Cosmo({ 
  mood = 'happy', 
  size = 'md', 
  animated = true,
  showMessage = false,
  customMessage,
  position = 'floating',
  onClick
}: Omit<CosmoProps, 'message'>) {
  const [currentMood, setCurrentMood] = useState(mood)
  const [isBouncing, setIsBouncing] = useState(false)
  const [showBubble, setShowBubble] = useState(false)

  const sizeClasses = {
    sm: 'cosmo-sm',
    md: 'cosmo-md', 
    lg: 'cosmo-lg',
    xl: 'cosmo-xl'
  }

  useEffect(() => {
    setCurrentMood(mood)
  }, [mood])

  useEffect(() => {
    if (animated) {
      // Random bounce khi happy
      const interval = setInterval(() => {
        if (currentMood === 'happy' || currentMood === 'excited') {
          setIsBouncing(true)
          setTimeout(() => setIsBouncing(false), 500)
        }
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [currentMood, animated])

  useEffect(() => {
    if (showMessage) {
      setShowBubble(true)
    }
  }, [showMessage])

  return (
    <div className={`cosmo-wrapper ${position}`} onClick={onClick}>
      {/* Cosmo Body */}
      <div className={`cosmo ${sizeClasses[size]} ${isBouncing ? 'bounce' : ''}`}>
        {/* Main body - slime vũ trụ */}
        <div className="cosmo-body">
          {/* Eyes */}
          <div className="cosmo-eyes">
            <div className="cosmo-eye left">
              <div className="cosmo-pupil" />
            </div>
            <div className="cosmo-eye right">
              <div className="cosmo-pupil" />
            </div>
          </div>
          
          {/* Cheeks */}
          <div className="cosmo-cheeks">
            <div className="cheek left" />
            <div className="cheek right" />
          </div>
          
          {/* Mouth based on mood */}
          <div className={`cosmo-mouth ${currentMood}`}>
            {currentMood === 'happy' && <span className="mouth-smile">😊</span>}
            {currentMood === 'excited' && <span className="mouth-open">😆</span>}
            {currentMood === 'thinking' && <span className="mouth-hmm">🤔</span>}
            {currentMood === 'sad' && <span className="mouth-sad">😢</span>}
            {currentMood === 'proud' && <span className="mouth-proud">😎</span>}
            {currentMood === 'confused' && <span className="mouth-confused">😵‍💫</span>}
            {currentMood === 'wink' && <span className="mouth-wink">😉</span>}
            {currentMood === 'love' && <span className="mouth-love">🥰</span>}
          </div>
          
          {/* Bling decorations */}
          <div className="cosmo-bling">✨</div>
          <div className="cosmo-bling delay-1">⭐</div>
          <div className="cosmo-bling delay-2">💫</div>
        </div>
        
        {/* Little stars around */}
        {animated && (
          <>
            <div className="cosmo-star s1">✦</div>
            <div className="cosmo-star s2">✧</div>
            <div className="cosmo-star s3">⋆</div>
          </>
        )}
      </div>
      
      {/* Speech Bubble */}
      {showMessage && (
        <div className={`cosmo-bubble ${showBubble ? 'show' : ''}`}>
          <p>{customMessage || getRandomMessage('welcome')}</p>
          <div className="bubble-tail" />
        </div>
      )}
    </div>
  )
}

// ===== COMPONENT CHO VIỆC HIỂN THỊ TRONG TRANG =====

interface CosmoGuideProps {
  context: 'home' | 'quiz' | 'result' | 'dashboard' | 'subject'
  status?: 'start' | 'correct' | 'wrong' | 'complete' | 'progress' | 'encourage'
  customMessage?: string
  showAlways?: boolean
}

export function CosmoGuide({ 
  context, 
  status,
  customMessage,
  showAlways = false 
}: CosmoGuideProps) {
  const [mood, setMood] = useState<keyof CosmoMood>('happy')
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Determine mood and message based on context
    if (status) {
      const moodMap: Record<string, keyof CosmoMood> = {
        correct: 'proud',
        wrong: 'thinking',
        complete: 'excited',
        progress: 'happy',
        encourage: 'love',
        start: 'excited'
      }
      setMood(moodMap[status] || 'happy')
      
      if (status === 'correct') setMessage(getRandomMessage('correct'))
      else if (status === 'wrong') setMessage(getRandomMessage('wrong'))
      else if (status === 'complete') setMessage(getRandomMessage('complete'))
      else if (status === 'progress') setMessage(getRandomMessage('progress'))
      else if (status === 'encourage') setMessage(getRandomMessage('encourage'))
      else if (status === 'start') setMessage(getRandomMessage('startQuiz'))
    } else {
      // Default messages based on context
      const defaultMsgs: Record<string, string> = {
        home: getRandomMessage('welcome'),
        quiz: getRandomMessage('startQuiz'),
        result: getRandomMessage('complete'),
        dashboard: "Chào! Hôm nay học gì nào? 🌟",
        subject: "Chọn lớp để bắt đầu nhé! 📚"
      }
      setMessage(customMessage || defaultMsgs[context])
    }
  }, [context, status, customMessage])

  if (!visible && !showAlways) return null

  return (
    <Cosmo 
      mood={mood} 
      size="md"
      showMessage={true}
      customMessage={message}
      position="floating"
    />
  )
}
