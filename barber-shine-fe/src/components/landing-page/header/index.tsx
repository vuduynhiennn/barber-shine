import React, { useState } from 'react'
import { HEADER_MENUS } from './MENU.config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

import XMarkRegularIcon from '@/icons/xmark-regular.svg'
import Logo from './Logo'
import Wrapper from '@/layout/Wrapper'
import dynamic from 'next/dynamic'
import { LoadingSpin } from '@/components/ui/loading'

const AuthForm = dynamic(() => import('@/features/auth'), {
  ssr: false,
  loading: () => <LoadingSpin isCenterScreen />,
})

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const toggleShowMenu = () => setIsShowMenu((pre) => !pre)

  return (
    <div className="shadow border border-b z-50">
      <Wrapper className="flex  h-14 py-1.5 justify-between items-center">
        <Logo />

        <HeaderMenu isShowMenu={isShowMenu} toggleShowMenu={toggleShowMenu} />

        <AuthForm toggleShowMenu={toggleShowMenu} />
      </Wrapper>
    </div>
  )
}

const HeaderMenu = ({
  isShowMenu,
  toggleShowMenu,
}: {
  isShowMenu: boolean
  toggleShowMenu: () => void
}) => {
  const router = useRouter()
  const path = router.pathname
  return (
    <ul
      className={cn(
        'flex fixed px-4  h-screen md:h-0  transition-all top-0 pt-4 md:pt-0 duration-300 bg-light z-10 flex-col md:flex-row md:relative items-center gap-7.5',
        isShowMenu
          ? 'right-0 w-full md:w-fit items-start md:items-center '
          : '-right-48 md:right-0'
      )}
    >
      <div className="flex mb-1 md:hidden items-center justify-between w-full">
        <Logo />
        <XMarkRegularIcon
          className="w-5 h-5 bg-dark-100  rounded"
          onClick={toggleShowMenu}
        />
      </div>

      {HEADER_MENUS.map((el) => (
        <li key={el.href}>
          <Link
            className={cn(
              'text-dark-300 font-semibold',
              el.href == path &&
                'md:border-b-2 md:pb-1 md:border-primary-lighter'
            )}
            href={el.href}
            onClick={toggleShowMenu}
          >
            {el.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
