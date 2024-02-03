import React from 'react'

type CommonQuestion = {
  _id: string
  ask: string
  answer: string
}

const fakeQuest: CommonQuestion[] = [
  {
    _id: '1',
    ask: 'Tôi có thể đặt lịch hẹn trực tuyến không?',
    answer:
      'Có, bạn có thể đặt lịch hẹn trực tuyến trên website của chúng tôi.',
  },
  {
    _id: '2',
    ask: 'Anh có thể mua thẻ ở đâu?',
    answer:
      'Anh có thể mua thẻ thành viên ở bất kỳ salon nào trên hệ thống 30Shine',
  },
  {
    _id: '3',
    ask: 'Shine Member có áp dụng được cho trẻ em không?',
    answer: 'Shine Member có áp dụng luôn cho các bé sử dụng combo KID',
  },
  {
    _id: '4',
    ask: 'Anh dùng chung Shine Member với người khác có được không?',
    answer:
      'Một thẻ Shine Member chỉ áp dụng với 1 người và 1 số điện thoại duy nhất.',
  },
  {
    _id: '5',
    ask: 'Anh đổi số điện thoại thì sao?',
    answer:
      'Anh hãy thông báo lại với lễ tân của 30Shine để được hỗ trợ điều chỉnh thông tin kịp thời anh nhé.',
  },
  {
    _id: '6',
    ask: 'Anh có nhận thẻ cứng Shine Member sau khi đăng ký không?',
    answer:
      'Anh sẽ được cấp thẻ cứng đối với cả 3 hạng thẻ Silver, Gold và Diamond. Anh mang thẻ tới salon mỗi lần dùng dịch vụ để quét mã thanh toán và hưởng đầy đủ quyền lợi anh nhé.',
  },
]

export default function CommonQuestion() {
  return (
    <div>
      <CommonQuestionTitle>Các câu hỏi thường gặp</CommonQuestionTitle>
      <div className="[&>*]:border-b border-primary/95 [&>*:last-child]:border-none">
        {fakeQuest.map((el) => (
          <CommonQuestionWrapper key={el._id}>
            <CommonQuestionAsk>{el.ask}</CommonQuestionAsk>
            <CommonQuestionAnswer>{el.answer}</CommonQuestionAnswer>
          </CommonQuestionWrapper>
        ))}
      </div>
    </div>
  )
}

const CommonQuestionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="text-primary text-2.5 font-bold uppercase text-center pt-8 pb-6">
      {children}
    </p>
  )
}

const CommonQuestionWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-3 pb-2">{children}</div>
}

const CommonQuestionAsk = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-primary text-lg font-bold">{children}</p>
}

const CommonQuestionAnswer = ({ children }: { children: React.ReactNode }) => {
  return <polygon className="text-lg text-gray-998">{children}</polygon>
}
