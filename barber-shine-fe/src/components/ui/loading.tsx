import { cn } from '@/lib/utils'
import SpinnerThirdIcon from '@/icons/spinner-third-regular.svg'
const LoadingSpin = ({ isCenterScreen }: { isCenterScreen?: boolean }) => {
  return (
    <div
      className={cn(
        isCenterScreen
          ? 'w-screen h-screen fixed top-0 left-0 flex justify-center items-center'
          : ''
      )}
    >
      <SpinnerThirdIcon className="w-6 animate-spin h-6" />
    </div>
  )
}
export { LoadingSpin }
