export interface ItemDTO {
    category: string
    description: string
    price: number
    id: string

}

export abstract class Item implements ItemDTO {
    category: string
    description: string
    price: number
    id: string
    constructor(category: string, description: string, price: number) {
        this.category = category
        this.description = description
        this.price = price
        this.id = `${Math.floor(Math.random() * 1000000)}`
    }
}
