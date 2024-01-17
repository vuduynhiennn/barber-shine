export const FormatCurrentcy = (currency: Number = 0) => {
  let temp
  if (typeof currency === 'number') {
    temp = currency
  } else {
    temp = 1
  }
  return temp?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
