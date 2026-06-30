export const validateOrder = (order) => {
  if (order.protein === 'Fish' && order.sauce === 'BBQ') {
    return 'Fish and BBQ sauce is not available as a combo.'
  }

  if (order.base === 'Salad' && order.side_item === 'Fries') {
    return 'Salad and fries cannot be selected together.'
  }

  return ''
}
