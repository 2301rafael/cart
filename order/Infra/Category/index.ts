import { Beer } from "./beer"
import { Cigar } from "./cigarrets"
import { Eletronic } from "./eletronics"
import { Water } from "./water"


export default class Category {
    factory(category: string) {
        switch (category) {
            case 'Beer':
                return (description: string, price: number) => new Beer(description, price)

            case 'Cigar':
                return (description: string, price: number) => new Cigar(description, price)

            case 'Eletronic':
                return (description: string, price: number) => new Eletronic(description, price)

            case 'Water':
                return (description: string, price: number) => new Water(description, price)

            default:
                throw new Error('Category must be valid')
        }
    }

    getCategories() {
        return ['Beer', 'Cigar', 'Eletronic', 'Water']
    }
}