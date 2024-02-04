import { cn } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function Banner({
  alt,
  src,
  className,
  bottomGradient,
}: {
  alt: string
  src: string | StaticImageData
  className?: string
  bottomGradient?: boolean
}) {
  return (
    <div
      className={cn(
        'relative rounded md:rounded-2xl overflow-hidden w-full h-[400px]',
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
      {bottomGradient && (
        <div className="bg-banner-bottom-gradient h-56 absolute bottom-0  w-full"></div>
      )}
    </div>
  )
}
