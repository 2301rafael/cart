import Product from "../../Infra/Products"
import { Router, Request, Response } from "express"
import { Cigar } from "../../Infra/Category/cigarrets"
import { Water } from "../../Infra/Category/water"
import { Eletronic } from "../../Infra/Category/eletronics"
import { Beer } from "../../Infra/Category/beer"


const route = Router()
const product = new Product()

route.get('/product', (req: Request, res: Response) => {
    res.json(product.getProducts())
})
route.get('/product/:id', (req: Request, res: Response) => {
    res.json(product.getProductById(req.params.id))
})
route.post('/product/cigar', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newCigar = new Cigar(description, price)
    product.addidProduct(newCigar)
    res.json(newCigar)
})

route.post('/product/water', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newWater = new Water(description, price)
    product.addidProduct(newWater)
    res.json(newWater)
})

route.post('/product/eletronics', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newEletronics = new Eletronic(description, price)
    product.addidProduct(newEletronics)
    res.json(newEletronics)
})

route.post('/product/beer', (req: Request, res: Response) => {
    const { price, description } = req.body
    const newBeer = new Beer(description, price)
    product.addidProduct(newBeer)
    res.json(newBeer)
})

route.delete('/product/:id', (req: Request, res: Response) => {
    const { id } = req.params
    try {
        product.removeProduct(id)
        res.json({ message: 'No content', code: 204 })
    } catch (error) {
        res.json({ error: error, code: 400 })
    }
})

export { route }


