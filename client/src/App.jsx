import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import CreateOrder from './pages/CreateOrder'
import Orders from './pages/Orders'
import Home from './pages/Home'
import OrderDetails from './pages/OrderDetails'
import EditOrder from './pages/EditOrder'
import './styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>🍲 A-Square Cuisine</h2>

        <div className="nav-links">
          <NavLink to="/">🏠 Home</NavLink>
          <NavLink to="/create">🥣 Customize Order</NavLink>
          <NavLink to="/orders">📋 View Orders</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/edit/:id" element={<EditOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
