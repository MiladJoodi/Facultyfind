import type { Metadata } from 'next'
import { Poppins } from "next/font/google";
import './globals.css'

export const metadata: Metadata = {
  title: 'Abolfazl Sample',
  description: 'by Joodi.me',
  generator: 'Joodi.me',
  icons: {
    icon: '/favicon.ico',
  }
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={poppins.className}>{children}</body>
  </html>
  )
}
