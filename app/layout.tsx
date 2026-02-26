import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from './lib/auth-context'

export const metadata: Metadata = {
  title: 'Học Viện Vũ Trụ - Học Tập Thú Vị',
  description: 'Nền tảng giáo dục gamification cho học sinh cấp 1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
