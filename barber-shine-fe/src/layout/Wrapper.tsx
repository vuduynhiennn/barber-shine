import { cn } from '@/lib/utils'
import React from 'react'

export default function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-screen-landing-page m-auto px-4', className)}>
      {children}
    </div>
  )
}
