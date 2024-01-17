import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Slot } from '@radix-ui/react-slot'
import { CaretRightIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
export type ButtonSideBarProps = {
  icon: React.ReactNode
  label: string
  href?: string
  onClick?: () => void
  isOpenSubmenu?: boolean
  sub_menus?: Array<
    Omit<ButtonSideBarProps, 'sub_menus' | 'icon' | 'isOpenSubmenu'>
  >
  className?: string
  variant?:
    | 'default'
    | 'ghost'
    | 'link'
    | 'destructive'
    | 'outline'
    | 'secondary'
}
export function ButtonSideBar({
  icon,
  label,
  href,
  sub_menus,
  className,
  onClick,
  variant,
  isOpenSubmenu,
  ...props
}: ButtonSideBarProps) {
  return (
    <Button
      variant={variant || 'ghost'}
      size="lg"
      className={cn(
        'text-md flex w-60 items-center justify-start rounded-e-full pl-6 pr-1',
        className
      )}
      onClick={onClick}
    >
      <Link
        href={href || '#'}
        className="text-md flex w-full items-center justify-start pr-2"
        onClick={(e) => {
          if (onClick || !href) {
            e.preventDefault()
          }
        }}
      >
        <div className="w-8">
          <Slot className="h-4 w-5 fill-current">{icon}</Slot>
        </div>
        <span className="grow  font-medium pl-1 text-left">{label}</span>
        {sub_menus && (
          <CaretRightIcon
            className={cn(
              'h-4 rotate-0 fill-current transition-all duration-300',
              isOpenSubmenu && 'rotate-90'
            )}
          />
        )}
      </Link>
    </Button>
  )
}
