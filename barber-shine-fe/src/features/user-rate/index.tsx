import React from 'react'
import StarRoundedSolidIcon from '@/icons/star-rounded-solid.svg'

export default function UserRate() {
  return (
    <div className="px-3 md:w-[305px] py-5 rounded-xl bg-light">
      <p className="uppercase text-primary text-xs font-bold">
        đánh giá chất lượng phục vụ
      </p>
      <p className="  my-1 text-xs text-primary">
        Nhằm cải thiện chất lượng dịch vụ, đáp ứng các mong muốn của khách hàng
      </p>
      <div className="flex items-center gap-2 [&>*]:fill-yellow-400 justify-start  mt-2">
        <StarRoundedSolidIcon />
        <StarRoundedSolidIcon />
        <StarRoundedSolidIcon />
        <StarRoundedSolidIcon />
        <StarRoundedSolidIcon />
      </div>
    </div>
  )
}
