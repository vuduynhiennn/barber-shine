import React from 'react'
import CategoryLabel, { DescriptionForLabel } from '../label'
import Banner from '@/components/banner'
import { cn } from '@/lib/utils'

const CONFIG: { alt: string; src: string; desc: string }[] = [
  {
    alt: 'space and tech',
    src: '/static/banner1.jpg',
    desc: 'Vượt qua giới hạn của tiệm tóc truyền thống, 30Shine tạo dựng không gian trải nghiệm hoàn toàn mới với trang thiết bị công nghệ hiện đại',
  },
  {
    alt: 'space and tech',
    src: '/static/banner1.jpg',
    desc: 'Không gian thoáng, mát, sạch',
  },
  {
    alt: 'space and tech',
    src: '/static/banner1.jpg',
    desc: 'Trang thiết bị hiện đại',
  },
  {
    alt: 'space and tech',
    src: '/static/banner1.jpg',
    desc: 'Ứng dụng đặt lịch độc quyền',
  },
]

export default function SpaceAndTech() {
  return (
    <div>
      <CategoryLabel>Không gian & công nghệ</CategoryLabel>
      <DescriptionForLabel>Trải nghiệm không gian mở</DescriptionForLabel>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5 my-5">
        {CONFIG.map((el, i) => (
          <div key={i} className={cn(i == 0 && 'col-span-3 relative ')}>
            <Banner
              src={el.src}
              alt={el.alt}
              className={cn(
                'md:h-40 h-24 aspect-square md:aspect-auto',
                i == 0 && '!h-[320px]'
              )}
              bottomGradient={i == 0}
            />
            <p
              className={cn(
                'text-center pt-2 text-base md:text-lg text-dark-300 font-semibold',
                i == 0 &&
                  'text-light md:text-lg text-sm absolute px-8 md:px-14 bottom-5 font-normal'
              )}
            >
              {el.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
