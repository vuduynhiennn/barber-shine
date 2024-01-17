import React, { Fragment, useContext, useEffect, useMemo } from 'react'

import { useRouter } from 'next/router'
import IsHavePermission from '@/utils/is-have-permission'
import {
  ArrowLeftIcon,
  ArrowTopRightIcon,
  CircleIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { ButtonSideBar } from './ButtonSidebar'
import { SeparatorSidebar } from './SeparatorSidebar'
import { cn } from '@/lib/utils'
import { useDashboardContext } from '@/context/dashboard-context'
import { AuthStateContext } from '@/context/auth-context'
import { MENUS, MenuItem } from './menu.config'
import { WEB_NAME } from '@/constant/web-name'
import ContactToDev from '@/components/landing-page/footer/ContactToDev'

export default function SideBar() {
  const { dashboardState } = useDashboardContext()
  const {
    is_show_sidebar,
    toggleSideBar,
    is_show_mini_sidebar,
    toggleMiniSideBar,
  } = dashboardState

  const {
    authState: { roles },
  } = useContext(AuthStateContext)

  const menus = useMemo(() => {
    let menus = [...MENUS]
    if (roles.length > 0) {
      // hide user menu if user is admin
      menus = menus
        .filter((menu) => !menu.hide_if_admin)
        .map((el) => ({
          ...el,
          sub_menus: el.sub_menus?.filter(
            (sub_menu) => !sub_menu.hide_if_admin
          ),
        }))
    }
    menus = menus.filter((menu) => {
      if (menu.role_require) {
        return IsHavePermission(menu.role_require, roles)
      }
      return true
    })
    return menus
  }, [roles])

  const router = useRouter()

  const [show_sub_menu_key, setShowSubMenuKey] = React.useState('')
  useEffect(() => {
    const handleRouteChange = () => {
      const foundParentMenu = menus.find((menu) =>
        menu.sub_menus?.find((sub_menu) => sub_menu.href == router.pathname)
      )
      if (foundParentMenu) setShowSubMenuKey(foundParentMenu.key)
    }
    handleRouteChange()
  }, [router, menus])

  const activeKey = useMemo(() => {
    const allMenus = [...menus, ...menus.map((el) => el.sub_menus).flat()]
    const foundMenu = allMenus.find((el) => el?.href == router.pathname)
    if (foundMenu) return foundMenu.key
    return ''
  }, [router, menus])

  const handleClickMenuCB = (menu: MenuItem) => {
    return (
      menu.sub_menus &&
      (() => setShowSubMenuKey((prev) => (prev == menu.key ? '' : menu.key)))
    )
  }

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 left-0 top-0 z-40 block bg-neutral-500 opacity-70 transition-all duration-500 ',
          !is_show_sidebar && 'hidden'
        )}
        onClick={toggleSideBar}
      />
      <div
        className={cn(
          'fixed left-0 top-0  h-screen w-0 overflow-hidden bg-neutral-100 border border-solid border-neutral-100 border-y-0 pt-5 md:border-none z-[1000] border-l-0 transition-width duration-300 ease-in-out',
          is_show_sidebar && 'w-64 pr-3 ',
          'md:w-64',
          is_show_mini_sidebar && 'md:w-[60px]'
        )}
      >
        <div>
          <Link
            href="/"
            className=" w-48 px-5 py-3  leading-10 uppercase bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-lighter font-bold"
          >
            {WEB_NAME}
          </Link>
          <SeparatorSidebar>TRANG QUẢN LÝ </SeparatorSidebar>
          {menus.map((menu) => (
            <Fragment key={menu.key}>
              <ButtonSideBar
                {...menu}
                key={menu.key}
                onClick={handleClickMenuCB(menu)}
                className={cn(
                  activeKey == menu.key
                    ? 'bg-gradient-to-r from-primary to-primary-lighter  text-light hover:bg-primary hover:text-light'
                    : 'ghost'
                )}
                isOpenSubmenu={show_sub_menu_key == menu.key}
              />
              {menu.sub_menus && (
                <div
                  className={cn(
                    'h-auto  max-h-0 overflow-hidden transition-all duration-300 ',
                    show_sub_menu_key == menu.key && 'max-h-96'
                  )}
                >
                  {menu.sub_menus.map((sub_menu) => (
                    <ButtonSideBar
                      {...sub_menu}
                      key={sub_menu.key}
                      icon={<CircleIcon className="w-[10px]" />}
                      className={cn(
                        activeKey == sub_menu.key
                          ? 'bg-gradient-to-r from-primary to-primary-lighter  text-light hover:bg-primary hover:text-light'
                          : 'ghost'
                      )}
                    />
                  ))}
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 hidden md:block">
          <div className="px-7">
            Made By: <ContactToDev />
          </div>
          <ButtonSideBar
            label={is_show_mini_sidebar ? 'Hiện' : 'Ẩn'}
            href="#"
            icon={
              is_show_mini_sidebar ? <ArrowTopRightIcon /> : <ArrowLeftIcon />
            }
            onClick={toggleMiniSideBar}
          />
        </div>
      </div>
    </>
  )
}
