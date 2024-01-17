import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import BarsSortRegularIcon from '@/icons/bars-sort-regular.svg'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { signInByPhone } from '@/firebase/firebase'

const AuthFormSchema = z.object({
  phoneNumber: z.string(),
  // .regex(
  //   new RegExp(/^(09|03|08|07|01[2|6|8|9])+([0-9]{8})\b/),
  //   'Định dạng số điện thoại không đúng !'
  // ),
})

export default function AuthForm({
  toggleShowMenu,
}: {
  toggleShowMenu: () => void
}) {
  const form = useForm<z.infer<typeof AuthFormSchema>>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: {
      phoneNumber: '',
    },
  })

  async function onSubmit(data: z.infer<typeof AuthFormSchema>) {
    // signInByPhone(data.phoneNumber)
  }

  return (
    <div className="flex items-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            id="sign-in-button"
            variant="outline"
            className="text-primary px-3 leading-none rounded-lg border-primary hover:bg-primary hover:text-light h-6 py-0.5"
          >
            Đăng nhập
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-text-gray-999 uppercase text-center font-semibold">
              Đăng nhập
            </DialogTitle>
            <DialogDescription className="text-center text-base">
              Tích điểm sử dụng dịch vụ, nâng hạng thành viên cùng hàng ngàn ưu
              đãi chỉ có tại Zuka Salon
            </DialogDescription>
          </DialogHeader>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          className="h-10 "
                          placeholder="Số điện thoại của quý khách"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          <DialogFooter>
            <Button
              onClick={form.handleSubmit(onSubmit)}
              className="uppercase text-light text-lg w-full h-10"
            >
              Tiếp tục
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <BarsSortRegularIcon
        className="w-5 md:hidden cursor-pointer h-5  ml-2.5"
        onClick={toggleShowMenu}
      />
    </div>
  )
}
