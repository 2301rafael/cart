import { Router, Request, Response } from 'express'
import Category from '../../Infra/Category'
const route = Router()
const category = new Category()

route.get('/category', (_: Request, res: Response) => {
  res.json(category.getCategories())
})

export { route }

