import Order from '@/features/order'
import LandingLayout from '@/layout/LandingLayout'
import React from 'react'

export default function index() {
  return (
    <LandingLayout>
      <div className="my-8">
        <Order />
      </div>
    </LandingLayout>
  )
}
