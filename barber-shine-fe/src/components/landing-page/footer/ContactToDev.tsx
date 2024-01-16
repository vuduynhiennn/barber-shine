import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function ContactToDev({ className }: { className?: string }) {
  return (
    <Link
      className={cn('font-bold', className)}
      href="https://www.facebook.com/vuduynhiennn/"
      target="_blank"
    >
      Vũ Duy Nhiên
    </Link>
  )
}
