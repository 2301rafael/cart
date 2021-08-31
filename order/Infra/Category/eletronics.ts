import { TaxItem } from '../../Interface/TaxItem'

export class Eletronic extends TaxItem {
    constructor(description: string, price: number) {
        super('Eletronic', description, price)

    }
    getTax() {
        return 0.3
    }
}
