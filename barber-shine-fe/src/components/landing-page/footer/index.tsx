import React from 'react'
import { FOOTER_CONFIG } from './CONFIG'
import Link from 'next/link'
import Wrapper from '@/layout/Wrapper'
import ConnectSocial from './ConnectSocial'
import ContactToDev from './ContactToDev'

export default function Footer() {
  return (
    <div>
      <div className=" bg-primary ">
        <Wrapper className="flex justify-between flex-wrap gap-8 md:gap-0 py-9 text-light">
          <div className="flex flex-wrap gap-8 md:gap-36">
            <ul className="flex flex-col gap-4">
              {FOOTER_CONFIG.map((el) => (
                <li key={el.href}>
                  <Link href={el.href} className="font-semibold">
                    {el.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-4">
              <li>Giờ phục vụ: 8h30 - 20h30 (Thứ 2-Chủ nhật)</li>
              <li>Hotline (1000đ/phút): 1900.27.27.03</li>
              <li>Liên hệ học nghề tóc: 0967.86.3030</li>
              <li>
                Liên hệ làm web: <ContactToDev />
              </li>
            </ul>
          </div>

          <ConnectSocial />
        </Wrapper>
      </div>

      <div>
        <p className="text-center py-2">
          Website được phát triển bởi <ContactToDev className="text-primary" />
        </p>
      </div>
    </div>
  )
}
