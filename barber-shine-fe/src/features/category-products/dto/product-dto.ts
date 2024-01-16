import { StaticImageData } from 'next/image'

export type ProductCategoryDto = {
  name: string
  href: string
  price: number
  image: string | StaticImageData
}
