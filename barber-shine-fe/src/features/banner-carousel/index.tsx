import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { BANNERS_CONFIG } from './CONFIG'
import Image from 'next/image'
import useDeviceDetection from '@/hooks/useDeviceDetection'

export function BannersCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  const device = useDeviceDetection()
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {BANNERS_CONFIG.map((el) => (
          <CarouselItem key={el._id}>
            <Image
              alt={el.alt}
              src={device == 'Mobile' ? el.mb : el.pc}
              className="md:rounded-2xl  h-[386px] object-cover"
              priority
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="[&>*]:md:-left-5 [&>*]:hidden [&>*]:md:flex">
        <CarouselPrevious />
      </div>
      <div className="[&>*]:md:-right-5 [&>*]:hidden [&>*]:md:flex">
        <CarouselNext />
      </div>
    </Carousel>
  )
}
