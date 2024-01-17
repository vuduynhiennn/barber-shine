import DevelopingWarn from '@/components/ui/developing'
import LandingLayout from '@/layout/LandingLayout'
import Wrapper from '@/layout/Wrapper'
import React, { ReactElement } from 'react'

export default function AddressPage() {
  return (
    <div>
      Địa chỉ
      <DevelopingWarn />
    </div>
  )
}

AddressPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <LandingLayout>
      <Wrapper className="md:py-3.5">{page}</Wrapper>
    </LandingLayout>
  )
}
