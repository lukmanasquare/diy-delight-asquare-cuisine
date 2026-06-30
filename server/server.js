import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import orderRoutes from './routes/orders.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api', orderRoutes)

app.get('/', (req, res) => {
  res.send('A-Square Cuisine API is running')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
