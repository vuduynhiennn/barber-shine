import HouseWindow from '@/icons/house-window-regular.svg'
import UserLockIcon from '@/icons/user-lock-regular.svg'
import ImageIcon from '@/icons/user-lock-regular.svg'
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
    key: 'user-profile',
    label: 'Tài Khoản',
    icon: <UserLockIcon />,
    sub_menus: [
      {
        key: 'user-secure',
        label: 'Đổi Mật Khẩu',
        href: `/setting/change-password`,
      },
      {
        key: 'login-history',
        label: 'Lich Sử Đăng Nhập',
        href: `/setting/login-history`,
      },

      {
        key: 'update-name',
        label: 'Cập Nhật Tên',
        href: `/setting/update`,
      },
    ],
  },
]
