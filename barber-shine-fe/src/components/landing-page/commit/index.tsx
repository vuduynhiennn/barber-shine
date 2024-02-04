import Banner from '@/components/banner'
import CategoryLabel, {
  DescriptionForLabel,
} from '@/components/landing-page/label'
import { WEB_NAME } from '@/constant/web-name'
import React from 'react'

const COMMITS: {
  _id: string
  firstLine: string
  secondLine: string
  thirdLine: string
}[] = [
  {
    _id: '1',
    firstLine: '30',
    secondLine: 'ngày',
    thirdLine: 'Đổi/trả hàng miễn phí',
  },
  {
    _id: '2',
    firstLine: '07',
    secondLine: 'ngày',
    thirdLine: 'Bảo hành tóc miễn phí',
  },
  {
    _id: '3',
    firstLine: 'Giảm',
    secondLine: '20%',
    thirdLine: 'Riêng lần đầu uốn nhuộm',
  },
]

export default function Commit() {
  return (
    <div>
      <CategoryLabel className="mb-1">{`cam kết ${WEB_NAME} care`}</CategoryLabel>
      <DescriptionForLabel>
        {`Sự hài lòng của anh là ưu tiên hàng đầu của ${WEB_NAME}`}
      </DescriptionForLabel>

      <Banner src="/static/banner1.jpg" alt="our commit" className="mt-4" />

      <div className="flex justify-around divide-x divide-[#D9D9D9] my-5">
        {COMMITS.map((el) => (
          <div key={el._id} className="flex-1">
            <p className="text-5xl text-center text-primary font-bold">
              {el.firstLine}
            </p>
            <p className="text-2xl text-center text-primary font-bold">
              {el.secondLine}
            </p>
            <p className="text-gray-444 text-center font-light px-3">
              {el.thirdLine}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
