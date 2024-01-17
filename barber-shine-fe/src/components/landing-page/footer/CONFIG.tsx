import { WEB_NAME } from '@/constant/web-name'
import FacebookIcon from '@/icons/facebook-square.svg'
import TikTokIcon from '@/icons/tiktok.svg'

export const FOOTER_CONFIG = [
  {
    label: 'Về chúng tôi',
    href: '/about',
  },
  {
    label: 'Học cắt tóc',
    href: '/day-nghe',
  },
  {
    label: `Địa chỉ ${WEB_NAME}`,
    href: '/address',
  },
]

export const SOCIAL_CONFIG = [
  {
    icon: <FacebookIcon className="fill-primary" />,
    label: '1409 follow',
    href: 'https://facebook.com',
  },
  {
    icon: <TikTokIcon className="fill-dark-300" />,
    label: '1409 follow',
    href: 'https:/tiktok.com',
  },
]
