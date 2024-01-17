import React from 'react'
import SideBar from '../sidebar'
import NavBar from '../navbar'
import { cn } from '@/lib/utils'
import { useDashboardContext } from '@/context/dashboard-context'
import { TooltipProvider } from '@/components/ui/tooltip'

export default function DashboardLayout({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const {
    dashboardState: { is_show_mini_sidebar },
  } = useDashboardContext()
  return (
    <TooltipProvider>
      <SideBar />

      <div
        className={cn(
          'w-[calc(100% - 64px)] mx-auto  px-3 transition-all duration-300 ease-in-out md:ml-16 md:px-4 ',
          className,
          !is_show_mini_sidebar && 'w-[calc(100% - 320px)] md:ml-80'
        )}
      >
        <NavBar />
        <div className="mt-4 md:border md:border-solid md:border-neutral-200 rounded px-4 md:mt-4 md:py-4">
          {children}
        </div>
      </div>
    </TooltipProvider>
  )
}
