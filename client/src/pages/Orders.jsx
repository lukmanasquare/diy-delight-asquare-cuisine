import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllOrders, deleteOrder } from '../services/OrdersAPI'

const getMealEmoji = (order) => {
  if (order.base === 'Rice' && order.protein === 'Chicken') return '🍛'
  if (order.base === 'Salad' && order.protein === 'Fish') return '🥗'
  if (order.base === 'Salad') return '🥙'
  if (order.base === 'Pasta') return '🍝'
  return '🍽️'
}

const Orders = () => {
  const [orders, setOrders] = useState([])

  const loadOrders = async () => {
    const data = await getAllOrders()
    setOrders(data)
  }

  useEffect(() => {
    loadOrders()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Delete this order?')) {
      await deleteOrder(id)
      loadOrders()
    }
  }

  return (
    <main className="orders-page">
      <div className="page-header">
        <div>
          <h1>Saved Orders</h1>
          <p>View, edit or delete your saved meal orders.</p>
        </div>

        <Link className="create-order-btn" to="/create">
          + Create New Order
        </Link>
      </div>

      <div className="orders-grid">
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className={`order-image ${order.base.toLowerCase()}`}>
              <span>{getMealEmoji(order)}</span>
            </div>

            <h2>{order.customer_name}</h2>

            <div className="order-info">
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

            <h3 className="order-price">${order.price}</h3>

            <div className="card-actions">
              <Link className="details-btn" to={`/orders/${order.id}`}>
                👁 Details
              </Link>

              <Link className="edit-btn" to={`/edit/${order.id}`}>
                ✏️ Edit
              </Link>

              <button
                className="delete-btn"
                onClick={() => handleDelete(order.id)}
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Orders
