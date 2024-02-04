import SpaceAndTech from '@/components/landing-page/space-and-tech'
import { BannersCarousel } from '@/features/banner-carousel'
import CategoryProducts from '@/features/category-products'
import { TEMP_PROD } from '@/features/category-products/temp.prod'
import Commit from '@/features/commit/components'
import Order from '@/features/order'
import UserRate from '@/features/user-rate'
import LandingLayout from '@/layout/LandingLayout'
import Wrapper from '@/layout/Wrapper'
import React from 'react'

export default function index() {
  return (
    <LandingLayout>
      <div className="bg-bg-main">
        <Wrapper className="px-0 md:px-4 md:pt-3.5">
          <BannersCarousel />
        </Wrapper>

        <Wrapper className="pb-8">
          <div className="mb-8 pb-8 md:w-4/5 m-auto my-8 flex gap-6 flex-wrap md:flex-nowrap justify-center">
            <Order />
            <UserRate />
          </div>
          <div className=" md:w-4/5 m-auto my-8 space-y-8">
            <CategoryProducts data={TEMP_PROD} label="Dịch vụ tóc" />
            <CategoryProducts data={TEMP_PROD} label="Spa & relax" />
            <SpaceAndTech />
            <Commit />
          </div>
        </Wrapper>
      </div>
    </LandingLayout>
  )
}
