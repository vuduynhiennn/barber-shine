import DevelopingWarn from '@/components/ui/developing'
import { WEB_NAME } from '@/constant/web-name'
import LandingLayout from '@/layout/LandingLayout'
import Wrapper from '@/layout/Wrapper'
import React, { ReactElement } from 'react'

export default function AboutPage() {
  return (
    <div>
      Giới thiệu {WEB_NAME}
      <DevelopingWarn />
    </div>
  )
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <Wrapper className="md:py-3.5">{page}</Wrapper>
    </LandingLayout>
  )
}
