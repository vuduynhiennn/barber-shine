import IconSetup from 'lmss_share_libs/icons/IconSetup.svg'
import UserVneckHair from '~/icons/fontawesome/regular/user-vneck-hair.svg'
import MoneyCheckDollarPen from '~/icons/fontawesome/regular/money-check-dollar-pen.svg'
import CartShoppingIcon from '~/icons/fontawesome/regular/cart-shopping.svg'
import ClockRotateLeft from '~/icons/fontawesome/regular/clock-rotate-left.svg'
import QrCode from '~/icons/fontawesome/regular/qrcode.svg'
import HouseWindow from '~/icons/fontawesome/regular/house-window.svg'
import BagShopping from '~/icons/fontawesome/regular/badge-check.svg'
import UserLockIcon from '~/icons/fontawesome/regular/user-lock.svg'
import ImageIcon from '~/icons/fontawesome/regular/images.svg'
import { ButtonSideBarProps } from './ButtonSidebar'
import { UserRoleEnum } from '@/types/user.enum'

export type MenuItem = Omit<ButtonSideBarProps, 'sub_menus'> & {
  key: string
  sub_menus?: Omit<MenuItem, 'icon' | 'sub_menus'>[]
  role_require?: UserRoleEnum[]
  hide_if_admin?: boolean
}
export const MENUS: MenuItem[] = [
  {
    label: 'Trang Chủ',
    key: 'home',
    icon: <HouseWindow />,
    href: '/',
  },
  {
    role_require: [UserRoleEnum.SIM_DATA_MANAGER],
    key: 'banner-mannager',
    label: `Banner`,
    icon: <ImageIcon />,
    href: '/admin-dashboard/banner',
  },
  {
    role_require: [UserRoleEnum.SIM_DATA_MANAGER],
    key: 'product-manager',
    label: 'Sản Phẩm',
    icon: <BagShopping />,
    sub_menus: [
      {
        key: 'add-new-sim',
        label: 'Thêm',
        href: '/admin-dashboard/sim/add',
      },
      {
        key: 'list-sim',
        label: 'Sim Data',
        href: '/admin-dashboard/sim',
      },
      {
        key: 'list-sim-otp',
        label: 'Sim OTP',
        href: '/admin-dashboard/sim/otp',
      },
      {
        key: 'list-sim-promotion',
        label: 'Sim Khuyến Mãi',
        href: '/admin-dashboard/sim/promotion',
      },
      {
        key: 'list-sim-beauty',
        label: 'Sim Số Đẹp',
        href: '/admin-dashboard/sim/beauty',
      },
    ],
  },
  {
    role_require: [UserRoleEnum.ORDER_MANAGER],

    key: 'order-manager',
    href: `/admin-dashboard/orders`,
    label: `Đơn Hàng`,
    icon: <CartShoppingIcon />,
  },
  {
    role_require: [UserRoleEnum.PAYMENT_VIEW],

    key: 'recharge-manager',
    label: `Nạp Tiền`,
    icon: <MoneyCheckDollarPen />,
    sub_menus: [
      {
        key: 'recharge',
        label: 'Cộng Tiền',
        href: `/admin-dashboard/payment/recharge`,
        role_require: [UserRoleEnum.PAYMENT_ADD],
      },
      {
        key: 'history-recharge',
        label: 'Lịch Sử',
        href: `/admin-dashboard/payment`,
      },
      {
        key: 'revenue-report',
        label: 'Doanh Thu',
        href: `/admin-dashboard/payment/reports`,
      },
    ],
  },
  {
    role_require: [UserRoleEnum.ROLE_MANAGER],
    key: 'user-manager',
    href: '/admin-dashboard/user',
    label: 'User',
    icon: <UserVneckHair />,
  },
  {
    role_require: [UserRoleEnum.VNMB_SETUP],
    key: 'agency-support',
    href: '/admin-dashboard/hoitrodaily',
    label: 'Setup VNMB',
    icon: <IconSetup />,
  },
  {
    key: 'service-manager',
    label: 'Dịch Vụ',
    icon: <QrCode />,
    role_require: [UserRoleEnum.ORDER_MANAGER],
    sub_menus: [
      {
        key: '5kvnmb',
        label: 'Nạp 5k,10k... VNMB',
        href: `/admin-dashboard/services/recharge`,
      },
      {
        key: 'checksdt',
        label: 'Check Sđt',
        href: `/admin-dashboard/services/check-sim`,
      },
    ],
  },
  {
    label: 'Dịch Vụ',
    key: 'service',
    icon: <QrCode />,
    href: `/user/services`,
    hide_if_admin: true,
  },
  {
    key: 'order',
    href: `/user/orders`,
    label: `Đơn Hàng`,
    icon: <CartShoppingIcon />,
    hide_if_admin: true,
  },
  {
    key: 'recharge-history',
    href: '/payment/history',
    label: 'Lịch Sử Nạp Tiền',
    icon: <ClockRotateLeft />,
    hide_if_admin: true,
  },
  {
    key: 'recharge',
    href: '/user/recharge',
    label: 'Nạp tiền',
    icon: <MoneyCheckDollarPen />,
    hide_if_admin: true,
  },
  {
    key: 'user-profile',
    label: 'Tài Khoản',
    icon: <UserLockIcon />,
    sub_menus: [
      {
        key: 'user-secure',
        label: 'Đổi Mật Khẩu',
        href: `/user/setting/change-password`,
      },
      {
        key: 'login-history',
        label: 'Lich Sử Đăng Nhập',
        href: `/user/setting/login-history`,
      },

      {
        key: 'update-name',
        label: 'Cập Nhật Tên',
        href: `/user/setting/update`,
      },
    ],
  },
]
