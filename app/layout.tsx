import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manisha International Solution | Global Trade & Export Specialist',
  description: 'Global trade specialist in Agro and Engineering. Export premium spices, dryfruits, and engineering goods. Your trusted partner in international business.',
  other: {
    developer: 'Avishkar Kabadi',
    'build-version': '1.0.0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
