import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../services/OrdersAPI'
import { calculatePrice } from '../utilities/calculatePrice'
import { validateOrder } from '../utilities/validateOrder'
import FoodPreview from '../components/FoodPreview'

const CreateOrder = () => {
  const navigate = useNavigate()

  const [order, setOrder] = useState({
    customer_name: '',
    base: 'Rice',
    protein: 'Chicken',
    sauce: 'Spicy',
    side_item: 'Plantain',
    drink: 'Water',
  })

  const [error, setError] = useState('')

  const price = calculatePrice(order)

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationError = validateOrder(order)

    if (validationError) {
      setError(validationError)
      return
    }

    await createOrder({
      ...order,
      price,
    })

    navigate('/orders')
  }

  return (
    <main className="page">
      <h1>Customize Your A-Square Cuisine Bowl</h1>

      {error && <p className="error">{error}</p>}

      <FoodPreview order={order} />

      <h2>Total Price: ${price}</h2>

      <form className="order-form" onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="customer_name"
          value={order.customer_name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Choose Base</label>
        <select name="base" value={order.base} onChange={handleChange}>
          <option value="Rice">Rice - $8</option>
          <option value="Pasta">Pasta - $10</option>
          <option value="Salad">Salad - $7</option>
        </select>

        <label>Choose Protein</label>
        <select name="protein" value={order.protein} onChange={handleChange}>
          <option value="Chicken">Chicken - $5</option>
          <option value="Beef">Beef - $6</option>
          <option value="Fish">Fish - $7</option>
          <option value="Tofu">Tofu - $4</option>
        </select>

        <label>Choose Sauce</label>
        <select name="sauce" value={order.sauce} onChange={handleChange}>
          <option value="Spicy">Spicy</option>
          <option value="Mild">Mild</option>
          <option value="BBQ">BBQ</option>
          <option value="Garlic">Garlic</option>
        </select>

        <label>Choose Side</label>
        <select
          name="side_item"
          value={order.side_item}
          onChange={handleChange}
        >
          <option value="Plantain">Plantain - $3</option>
          <option value="Fries">Fries - $3</option>
          <option value="Coleslaw">Coleslaw - $2</option>
        </select>

        <label>Choose Drink</label>
        <select name="drink" value={order.drink} onChange={handleChange}>
          <option value="Water">Water - $1</option>
          <option value="Coke">Coke - $2</option>
          <option value="Juice">Juice - $3</option>
        </select>

        <button type="submit">Save Order</button>
      </form>
    </main>
  )
}

export default CreateOrder
