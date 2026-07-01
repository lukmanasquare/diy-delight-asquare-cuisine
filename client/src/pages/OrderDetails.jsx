import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getOrder, deleteOrder } from '../services/OrdersAPI'

const OrderDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)

  useEffect(() => {
    const loadOrder = async () => {
      const data = await getOrder(id)
      setOrder(data)
    }

    loadOrder()
  }, [id])

  const handleDelete = async () => {
    if (window.confirm('Delete this order?')) {
      await deleteOrder(id)
      navigate('/orders')
    }
  }

  if (!order) {
    return <main className="page">Loading...</main>
  }

  return (
    <main className="details-page">
      <div className="details-card">
        <div className={`details-image ${order.base.toLowerCase()}`}>🍽️</div>

        <div className="details-content">
          <p className="eyebrow">Order Details</p>
          <h1>{order.customer_name}</h1>
          <h2>Total Price: ${order.price}</h2>

          <div className="details-info">
            <p>
              🥣 <strong>Base:</strong> {order.base}
            </p>
            <p>
              🍗 <strong>Protein:</strong> {order.protein}
            </p>
            <p>
              🌶️ <strong>Sauce:</strong> {order.sauce}
            </p>
            <p>
              🌿 <strong>Side:</strong> {order.side_item}
            </p>
            <p>
              🥤 <strong>Drink:</strong> {order.drink}
            </p>
          </div>

          <div className="details-actions">
            <Link className="back-btn" to="/orders">
              ← Back to Orders
            </Link>

            <Link className="edit-btn action-link" to={`/edit/${order.id}`}>
              ✏️ Edit Order
            </Link>

            <button className="delete-btn action-link" onClick={handleDelete}>
              🗑 Delete Order
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default OrderDetails
