import { TaxItem } from '../../Interface/TaxItem'

export class Cigar extends TaxItem {
    constructor(description: string, price: number) {
        super('Cigar', description, price)
    }
    getTax() {
        return 0.2
    }
}
