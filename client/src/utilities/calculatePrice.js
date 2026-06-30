export const calculatePrice = (order) => {
  let total = 0

  if (order.base === 'Rice') total += 8
  if (order.base === 'Pasta') total += 10
  if (order.base === 'Salad') total += 7

  if (order.protein === 'Chicken') total += 5
  if (order.protein === 'Beef') total += 6
  if (order.protein === 'Fish') total += 7
  if (order.protein === 'Tofu') total += 4

  if (order.side_item === 'Plantain') total += 3
  if (order.side_item === 'Fries') total += 3
  if (order.side_item === 'Coleslaw') total += 2

  if (order.drink === 'Water') total += 1
  if (order.drink === 'Coke') total += 2
  if (order.drink === 'Juice') total += 3

  return total
}
