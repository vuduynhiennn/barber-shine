import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function ServiceStepUi({
  serviceStepText,
  serviceBackground,
  alt,
}: {
  serviceStepText: string
  serviceBackground: string | StaticImageData
  alt: string
}) {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <ServiceStepImage src={serviceBackground} alt={alt} />
      <ServiceStepText>{serviceStepText}</ServiceStepText>
    </div>
  )
}

const ServiceStepImage = ({
  src,
  alt,
}: {
  src: string | StaticImageData
  alt: string
}) => (
  <Image
    src={src}
    alt={alt}
    className="w-full h-[151px] rounded-lg object-cover"
    width={225}
    height={151}
    quality={100}
  />
)

export const ServiceStepText = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <p className="text-primary text-sm md:text-lg text-center font-semibold">
    {children}
  </p>
)
