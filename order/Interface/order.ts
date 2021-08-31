import {ItemDTO} from './item'

export default interface OrderDTO {
  code: string
  items: ItemDTO[]
}