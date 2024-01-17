import React, { useContext } from 'react'
import { Button } from '@/components/ui/button'
import MoneyCheckDollarPen from '~/icons/fontawesome/regular/money-check-dollar-pen.svg'
import LockIcon from '@/icons/lock-regular.svg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import LogoutIcon from '~/icons/fontawesome/regular/arrow-right-from-bracket.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import ArrowDownIcon from '~/icons/arrowdown2.svg'
import { FormatCurrentcy } from '@/utils/format-currency'
import { AuthStateContext } from '@/context/auth-context'
import { useDashboardContext } from '@/context/dashboard-context'

export default function NavBar() {
  const { authState, setAuthState } = useContext(AuthStateContext)

  const { dashboardState } = useDashboardContext()
  const toggleSideBar = dashboardState.toggleSideBar

  const { balance, number_id, first_name, last_name } = authState

  const fullName = first_name && last_name ? `${first_name} ${last_name}` : ''

  const handleLogout = (path: string) => {
    // Cookies.remove('refresh_token')
    // Cookies.remove('access_token')
    setAuthState((authState) => ({
      ...authState,
      is_login: false,
      roles: [],
    }))
    router.push(path)
  }

  const router = useRouter()
  return (
    <nav className="mx-auto flex w-full justify-between pt-3  md:justify-end md:px-0">
      <Button
        size="icon"
        variant="ghost"
        onClick={toggleSideBar}
        className="flex md:hidden"
      >
        <HamburgerMenuIcon className="mt-1 w-6 h-6" />
      </Button>

      <div className="flex items-center space-x-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center gap-3 h-14  -my-2  outline-none border-none"
            >
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                  width={40}
                  height={40}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="font-bold flex text-ssm flex-col mt-[9px] items-start">
                <p className="max-w-[90px] truncate md:max-w-none text-base leading-[14px]">
                  {fullName.length != 0 ? fullName : 'Guest'}
                </p>
                <p className="">
                  {' '}
                  Số dư:{' '}
                  <span className="text-primary">
                    {FormatCurrentcy(balance)}đ
                  </span>
                </p>
              </div>
              <ArrowDownIcon className="fill-current w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              {first_name && last_name
                ? `${first_name} ${last_name}`
                : number_id
                  ? number_id
                  : 'User'}
              <strong className="pl-2">{FormatCurrentcy(balance) + 'đ'}</strong>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuItem>
                <Link
                  href="/user/setting/change-password"
                  className="flex items-center"
                >
                  <LockIcon className="mr-2 h-4 w-4  fill-current" />
                  <span>Đổi mật khẩu</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/user/recharge" className="flex items-center">
                  <MoneyCheckDollarPen className="mr-2 h-4 w-4  fill-current" />
                  <span>Nạp tiền</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  handleLogout('/login')
                }}
              >
                <LogoutIcon className="mr-2 h-4 fill-current" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
