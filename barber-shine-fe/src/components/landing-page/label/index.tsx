import { cn } from '@/lib/utils'
import React from 'react'

export default function CategoryLabel({
  children,
  className,
}: {
  children?: string
  className?: string
}) {
  return (
    <>
      {typeof children == 'string' && (
        <p
          className={cn(
            '[*&]:text-primary text-2.5 font-bold uppercase pl-2 border-primary-lighter border-l-5 h-fit leading-none',
            className
          )}
        >
          {children}
        </p>
      )}
    </>
  )
}