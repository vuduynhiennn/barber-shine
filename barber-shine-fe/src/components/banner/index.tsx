import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Banner({
  alt,
  src,
  className,
}: {
  alt: string
  src: string | StaticImageData
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1180}
      height={200}
      className={cn('rounded md:rounded-2xl', className)}
    />
  )
}
