import { useDashboardContext } from '@/context/dashboard-context'
import { cn } from '@/lib/utils'

function SeparatorSidebar({ children }: { children: React.ReactNode }) {
  const { dashboardState } = useDashboardContext()
  const is_show_mini_sidebar = dashboardState.is_show_mini_sidebar
  return (
    <div className="relative flex h-4 items-center py-5">
      {!is_show_mini_sidebar && (
        <span
          className={cn(
            'mr-2 pl-6 text-[8px] text-primary',
            is_show_mini_sidebar && 'pl-0'
          )}
        >
          {children}
        </span>
      )}
      <div
        className={cn(
          'mr-2 flex-grow border-x-0 border-b-0 border-t border-solid border-neutral-300',
          is_show_mini_sidebar && 'mr-0'
        )}
      ></div>
    </div>
  )
}
export { SeparatorSidebar }
