import './globals.css'
import { Dancing_Script, Playfair_Display, Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dancing = Dancing_Script({ subsets: ['latin'], weight: '400' })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Alexandre Cunha | Dev C & .NET',
  description: 'Portfólio de Alexandre Cunha de Farias',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}