import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import '@/styles/globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Frontend Structure',
  description: 'Frontend Structure',
}
const vazrimatn = Vazirmatn({ subsets: ['arabic'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={vazrimatn.className}>{children}</body>
    </html>
  )
}
