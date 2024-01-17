import Footer from '@/components/landing-page/footer'
import { LoadingSpin } from '@/components/ui/loading'
import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('@/components/landing-page/header'), {
  ssr: false,
  loading: () => <LoadingSpin isCenterScreen />,
})

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
