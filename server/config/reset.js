import dotenv from 'dotenv'
dotenv.config()

import { pool } from './database.js'

const resetDatabase = async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS orders`)

    await pool.query(`
      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        customer_name TEXT NOT NULL,
        base TEXT NOT NULL,
        protein TEXT NOT NULL,
        sauce TEXT NOT NULL,
        side_item TEXT NOT NULL,
        drink TEXT NOT NULL,
        price INTEGER NOT NULL
      )
    `)

    await pool.query(`
      INSERT INTO orders 
      (customer_name, base, protein, sauce, side_item, drink, price)
      VALUES
      ('Lukman', 'Rice', 'Chicken', 'Spicy', 'Plantain', 'Juice', 27),
      ('Default Order', 'Salad', 'Tofu', 'Garlic', 'Coleslaw', 'Water', 18)
    `)

    console.log('Database reset successfully')
    process.exit()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

resetDatabase()
