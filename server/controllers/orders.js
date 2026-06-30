import { pool } from '../config/database.js'

export const getOrders = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders ORDER BY id ASC')
    res.status(200).json(result.rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getOrder = async (req, res) => {
  try {
    const { id } = req.params

    const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id])

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const createOrder = async (req, res) => {
  try {
    const { customer_name, base, protein, sauce, side_item, drink, price } =
      req.body

    if (protein === 'Fish' && sauce === 'BBQ') {
      return res.status(400).json({
        error: 'Fish and BBQ sauce is not available as a combo.',
      })
    }

    if (base === 'Salad' && side_item === 'Fries') {
      return res.status(400).json({
        error: 'Salad and fries cannot be selected together.',
      })
    }

    const result = await pool.query(
      `INSERT INTO orders 
      (customer_name, base, protein, sauce, side_item, drink, price)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [customer_name, base, protein, sauce, side_item, drink, price],
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const updateOrder = async (req, res) => {
  try {
    const { id } = req.params
    const { customer_name, base, protein, sauce, side_item, drink, price } =
      req.body

    const result = await pool.query(
      `UPDATE orders
       SET customer_name=$1, base=$2, protein=$3, sauce=$4, side_item=$5, drink=$6, price=$7
       WHERE id=$8
       RETURNING *`,
      [customer_name, base, protein, sauce, side_item, drink, price, id],
    )

    res.status(200).json(result.rows[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params

    await pool.query('DELETE FROM orders WHERE id = $1', [id])

    res.status(200).json({ message: 'Order deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
