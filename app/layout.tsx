import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ChatWidget } from '@/components/chat-widget'
import { CursorGlow } from '@/components/cursor-glow'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Kenjie P. Lazo | Front-End Developer & Graphic Designer',
  description: 'Portfolio of Kenjie P. Lazo - Front-End Developer and Graphic Designer based in Metro Manila, Philippines.',
  keywords: ['Front-End Developer', 'Graphic Designer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Kenjie P. Lazo' }],
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Kenjie P. Lazo | Front-End Developer & Graphic Designer',
    description: 'Portfolio of Kenjie P. Lazo - Front-End Developer and Graphic Designer based in Metro Manila, Philippines.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div 
          className="fixed inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                             linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
          <ChatWidget />
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  )
}
