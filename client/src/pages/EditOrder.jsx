import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getOrder, updateOrder } from '../services/OrdersAPI'
import { calculatePrice } from '../utilities/calculatePrice'
import { validateOrder } from '../utilities/validateOrder'
import FoodPreview from '../components/FoodPreview'

const EditOrder = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadOrder = async () => {
      const data = await getOrder(id)
      setOrder(data)
    }

    loadOrder()
  }, [id])

  if (!order) {
    return <h2>Loading...</h2>
  }

  const price = calculatePrice(order)

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const validationError = validateOrder(order)

    if (validationError) {
      setError(validationError)
      return
    }

    await updateOrder(id, {
      ...order,
      price,
    })

    navigate(`/orders/${id}`)
  }

  return (
    <main className="page">
      <h1>Edit Order</h1>

      {error && <p className="error">{error}</p>}

      <FoodPreview order={order} />

      <h2>Total Price: ${price}</h2>

      <form className="order-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="customer_name"
          value={order.customer_name}
          onChange={handleChange}
        />

        <label>Base</label>
        <select name="base" value={order.base} onChange={handleChange}>
          <option>Rice</option>
          <option>Pasta</option>
          <option>Salad</option>
        </select>

        <label>Protein</label>
        <select name="protein" value={order.protein} onChange={handleChange}>
          <option>Chicken</option>
          <option>Beef</option>
          <option>Fish</option>
          <option>Tofu</option>
        </select>

        <label>Sauce</label>
        <select name="sauce" value={order.sauce} onChange={handleChange}>
          <option>Spicy</option>
          <option>Mild</option>
          <option>BBQ</option>
          <option>Garlic</option>
        </select>

        <label>Side</label>
        <select
          name="side_item"
          value={order.side_item}
          onChange={handleChange}
        >
          <option>Plantain</option>
          <option>Fries</option>
          <option>Coleslaw</option>
        </select>

        <label>Drink</label>
        <select name="drink" value={order.drink} onChange={handleChange}>
          <option>Water</option>
          <option>Coke</option>
          <option>Juice</option>
        </select>

        <button type="submit">Update Order</button>
      </form>
    </main>
  )
}

export default EditOrder
