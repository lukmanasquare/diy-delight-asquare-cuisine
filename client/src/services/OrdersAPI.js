const API_URL = 'http://localhost:3001/api/orders'

export const getAllOrders = async () => {
  const response = await fetch(API_URL)
  return await response.json()
}

export const getOrder = async (id) => {
  const response = await fetch(`${API_URL}/${id}`)
  return await response.json()
}

export const createOrder = async (order) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  return await response.json()
}

export const updateOrder = async (id, order) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })

  return await response.json()
}

export const deleteOrder = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  })

  return await response.json()
}
