import React from 'react'
import CategoryLabel, {
  DescriptionForLabel,
} from '@/components/landing-page/label'
import ServiceStepUi from '@/components/landing-page/service-step-ui'
import Wrapper from '@/layout/Wrapper'

const fakeServiceStep = [
  {
    serviceStepText: 'Soi da',
    serviceBackground: '/static/banner1.jpg',
    alt: 'soi da',
    _id: '1',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '2',
  },
  {
    serviceStepText: 'Massage đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'massage đầu',
    _id: '3',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '4',
  },
  {
    serviceStepText: 'Massage đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'massage đầu',
    _id: '5',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '6',
  },
  {
    serviceStepText: 'Massage đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'massage đầu',
    _id: '7',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '8',
  },
  {
    serviceStepText: 'Massage đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'massage đầu',
    _id: '9',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '10',
  },
  {
    serviceStepText: 'Massage đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'massage đầu',
    _id: '11',
  },
  {
    serviceStepText: 'Gội đầu',
    serviceBackground: '/static/banner1.jpg',
    alt: 'gội đầu',
    _id: '12',
  },
]

export default function test() {
  return (
    <Wrapper>
      <CategoryLabel>Quy trình dịch vụ </CategoryLabel>
      <DescriptionForLabel>
        Quy trình 14 bước Gội & Massage bấm lưng, cổ vai gáy bằng đá nóng giãn
        cơ, thư giãn xua tan căng thẳng.
      </DescriptionForLabel>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-x-4.5 gap-y-3">
        {fakeServiceStep.map((serviceStep) => (
          <ServiceStepUi
            key={serviceStep._id}
            serviceStepText={serviceStep.serviceStepText}
            serviceBackground={serviceStep.serviceBackground}
            alt={serviceStep.alt}
          />
        ))}
      </div>
    </Wrapper>
  )
}
