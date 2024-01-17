import DevelopingWarn from '@/components/ui/developing'
import LandingLayout from '@/layout/LandingLayout'
import Wrapper from '@/layout/Wrapper'
import React, { ReactElement } from 'react'

export default function TrainingPage() {
  return (
    <div>
      TechingPage <DevelopingWarn />
    </div>
  )
}

TrainingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <Wrapper className="md:py-3.5">{page}</Wrapper>
    </LandingLayout>
  )
}
