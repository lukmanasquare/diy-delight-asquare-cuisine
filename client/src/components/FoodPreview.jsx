const FoodPreview = ({ order }) => {
  return (
    <div className={`food-preview ${order.base.toLowerCase()}`}>
      <h2>{order.base} Bowl</h2>
      <p>{order.protein}</p>
      <p>{order.sauce} Sauce</p>
    </div>
  )
}

export default FoodPreview
