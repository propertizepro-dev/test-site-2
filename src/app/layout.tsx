import './globals.css'
import { Inter, Bebas_Neue, Source_Sans_Pro } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const bebas = Bebas_Neue({weight: "400", subsets: ['latin'], variable: "--font-bebas"})
const sourceSans = Source_Sans_Pro({ weight: "400", subsets: ['latin'], variable: "--font-source-sans" })

export const metadata = {
  title: 'Propertize Template 1',
  description: 'The first template for Propertize listing websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${sourceSans.variable} font-source `}>{children}</body>
    </html>
  )
}
