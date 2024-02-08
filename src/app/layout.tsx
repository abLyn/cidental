import Navbar from '@/components/navbar/Navbar'
import ThemeProvider from '@/providers/ThemeProvider'
import type { Metadata } from 'next'
import { Inter, Lato } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <section className="flex min-h-screen flex-1 mt-16 flex-col items-center  px-6 pb-10 pt-10 max-md:pb-32 sm:px-10">
            <div className="w-full max-w-7xl">{children}</div>
          </section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
