export const ToVnd = (number: number): string => {
  return number.toLocaleString('vi-Vi', { style: 'currency', currency: 'VND' })
}
