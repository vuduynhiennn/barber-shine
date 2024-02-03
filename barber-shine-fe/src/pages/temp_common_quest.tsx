import CommonQuestion from '@/features/common-question/components'
import LandingLayout from '@/layout/LandingLayout'
import Wrapper from '@/layout/Wrapper'
import React, { ReactElement } from 'react'

export default function CommonQuestionPage() {
  return (
    <Wrapper>
      <CommonQuestion />
    </Wrapper>
  )
}

CommonQuestionPage.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
