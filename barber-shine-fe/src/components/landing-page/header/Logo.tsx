import { WEB_NAME } from '@/constant/web-name'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link
      href={'/'}
      className="bg-clip-text uppercase text-transparent bg-gradient-to-r from-blue-500 font-bold to-primary"
    >
      {WEB_NAME}
    </Link>
  )
}
