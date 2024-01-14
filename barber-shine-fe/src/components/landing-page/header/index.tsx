import React from 'react'
import { HEADER_MENUS } from './MENU.conficts'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <div className="flex h-14 py-1.5 justify-between items-center">
      <Link
        href={'/'}
        className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 font-bold to-primary"
      >
        ZUKA SALON
      </Link>

      <HeaderMenu />

      <Button
        variant="outline"
        className="text-primary px-3 leading-none rounded-lg border-primary hover:bg-primary hover:text-light h-6 py-0.5"
      >
        <Link href={'/auth/login'}>Đăng nhập</Link>
      </Button>
    </div>
  )
}

const HeaderMenu = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <ul className="flex items-center gap-7.5">
      {HEADER_MENUS.map((el) => (
        <li key={el.href}>
          <Link
            className={cn(
              'text-dark-300 font-semibold',
              el.href == path && 'border-b-2 pb-1 border-primary-lighter'
            )}
            href={el.href}
          >
            {el.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
