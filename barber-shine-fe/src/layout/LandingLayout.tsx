import Footer from '@/components/landing-page/footer'
import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('@/components/landing-page/header'), {
  ssr: false,
  loading: () => <div>loading..</div>,
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
