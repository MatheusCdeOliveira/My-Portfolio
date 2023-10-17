import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Provider from './providers'

const inter = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'] })

export const metadata: Metadata = {
  title: 'Matheus Campos',
  description: 'Portfolio created by Matheus Campos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>{children}</Provider>
        </body>
    </html>
  )
}
