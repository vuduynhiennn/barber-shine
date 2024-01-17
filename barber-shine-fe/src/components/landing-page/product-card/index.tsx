import { ToVnd } from '@/utils/ToVnDong'
import Link from 'next/link'
import React from 'react'
import ChevronRightIcon from '@/icons/chevron-right.svg'
import Image, { StaticImageData } from 'next/image'

export default function ProductCard({
  name,
  price,
  href,
  image,
}: {
  name: string
  price: number
  href: string
  image: string | StaticImageData
}) {
  return (
    <div className=" relative bg-light shadow rounded md:rounded-2xl overflow-hidden">
      <Image
        alt="our servce"
        className="h-24 md:h-48 z-0 object-cover"
        src={image}
        priority
      />
      <div className="py-2.5 z-50 pl-2.5 pr-5 md:pt-4 bg-light">
        <p className="text-primary text-base leading-tight md:text-2xl font-bold text-center md:text-start">
          {name}
        </p>

        <div className="flex justify-between flex-col md:flex-row items-center">
          <p className="text-gray-444 font-light text-sm md:text-base ">
            Giá từ {ToVnd(price)}
          </p>
          <Link href={href} className="flex items-center gap-1">
            <p className="text-[11px]  md:text-sm font-semibold text-primary">
              Tìm hiểu thêm
            </p>
            <ChevronRightIcon className="fill-primary pt-1 h-3 md:h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
