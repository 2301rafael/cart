import { Router, Request, Response } from "express"
import Order from "../../Infra/order";
import { product } from "../Products/products";


const route = Router()
const order = new Order()


route.get('/order', (req: Request, res: Response) => {
    res.json(order.getOrders())
})
route.get('/order/:id', (req: Request, res: Response) => {
    res.json(order.getByCode(req.params.id))

})

route.post('/order/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    const [products] = product.getProductById(id)
    const newOrder = order.addItem(products, code)
    res.json(newOrder)

})
route.delete('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    const orders = order.removeOrder(code)
    res.json(orders)
})


route.get('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    const orders = order.getByCode(code)
    res.json(orders)
})

route.get('/order', (_: Request, res: Response) => {
    const orders = order.getOrders()
    res.json(orders)
})

route.post('/order-item/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    const [newItem] = product.getProductById(id)
    const newOrder = order.addItem(newItem, code)
    res.json(newOrder)
})

route.delete('/order-item/:code/:id', (req: Request, res: Response) => {
    const { code, id } = req.params
    try {
        const clientOrder = order.removeItem(id, code)
        res.json(clientOrder)
    } catch (error) {
        res.json(error)
    }
})

route.delete('/order/:code', (req: Request, res: Response) => {
    const { code } = req.params
    order.removeOrder(code)
    res.json({ message: 'No Content', code: 204 })
})

export { route }
