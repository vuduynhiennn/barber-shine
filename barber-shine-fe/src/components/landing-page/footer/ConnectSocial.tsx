import React from 'react'
import { SOCIAL_CONFIG } from './CONFIG'
import { Slot } from '@radix-ui/react-slot'
import Link from 'next/link'
export default function ConnectSocial() {
  return (
    <div>
      <p className="mb-3">Tham gia cộng đồng zuka salon</p>
      <div className="flex gap-4 flex-wrap">
        {SOCIAL_CONFIG.map((el) => (
          <Link
            target="_blank"
            href={el.href}
            key={el.href}
            className="bg-light flex items-center gap-2 rounded px-3 py-2"
          >
            <Slot className="w-7 h-7">{el.icon}</Slot>
            <span className="text-dark-300 font-medium">{el.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
