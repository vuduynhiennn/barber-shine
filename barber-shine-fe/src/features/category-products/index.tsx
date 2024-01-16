import CategoryLabel from '@/components/landing-page/label'
import ProductCard from '@/components/landing-page/product-card'
import React from 'react'
import { ProductCategoryDto } from './dto/product-dto'

export default function CategoryProducts({
  label,
  data,
}: {
  label: string
  data: ProductCategoryDto[]
}) {
  return (
    <div>
      <CategoryLabel>{label}</CategoryLabel>
      <div className="mt-5 flex justify-between gap-2 md:gap-5">
        {data.map((el) => (
          <ProductCard
            image={el.image}
            key={el.href}
            name={el.name}
            price={el.price}
            href={el.href}
          />
        ))}
      </div>
    </div>
  )
}
