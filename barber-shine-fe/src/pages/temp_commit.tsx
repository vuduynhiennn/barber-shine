import LandingLayout from '@/layout/LandingLayout'
import React, { ReactElement } from 'react'

export default function Commit() {
  return <div>Commit</div>
}

Commit.getLayout = function getLayout(page: ReactElement) {
  return <LandingLayout>{page}</LandingLayout>
}
