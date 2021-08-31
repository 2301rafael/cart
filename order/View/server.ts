import express from 'express'
import { route as productsRoutes } from './Products/products'
import { route as ordersRoutes } from './Order/order'
import { route as categoriesRoutes } from './Category/category'


const apiPort = 3333
const app = express()
app.use(express.json())

app.use(productsRoutes, ordersRoutes, categoriesRoutes)

app.listen(apiPort, () => console.log('server running on port 3333'))