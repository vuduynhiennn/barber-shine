import Footer from '@/components/landing-page/footer'
import Header from '@/components/landing-page/header'
import React from 'react'
import Wrapper from './Wrapper'

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
      <Footer />
    </div>
  )
}
