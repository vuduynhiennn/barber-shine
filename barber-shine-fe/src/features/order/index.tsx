import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Order() {
  return (
    <div className="px-7 pt-3 md:w-[566px] pb-4 rounded-xl bg-primary">
      <p className="uppercase text-light text-lg font-bold">
        Đặt lịch cắt tóc tại zuka salon
      </p>
      <p className="text-light text-lg mb-1">
        Cắt xong trả tiền, hủy lịch không sao
      </p>
      <div className="flex items-center justify-between gap-4">
        <Input
          placeholder="Nhập SĐT để đặt lịch"
          className="w-full h-10 bg-light"
        />
        <Button className="h-10 uppercase border border-solid border-primary-lighter shadow-md text-dark-100 bg-gradient-to-r from-primary-lighter/70 to-primary-lighter">
          Đặt lịch ngay
        </Button>
      </div>
    </div>
  )
}
