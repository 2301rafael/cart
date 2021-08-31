
import { Item, ItemDTO } from '../Interface/item'
import OrderDTO from '../Interface/order'
import { TaxItem } from '../Interface/TaxItem'



export default class Order {

    orderList: OrderDTO[] = []

    addItem(item: ItemDTO, orderCode: string): OrderDTO | void {
        for (const order of this.orderList) {
            if (orderCode === order.code) {
                order.items.push(item)
                return order
            }
        }
        throw new Error("Order must be defined and exist on database")
    }



    getOrders(): OrderDTO[] {
        return this.orderList
    }

    getByCode(orderCode: string): {} {
        const currentOrder = this.orderList.filter(({ code }) => code === orderCode)
        const value = this.getTotal(orderCode)
        return { currentOrder, value: value }
    }

    removeItem(id: string, orderCode: string): OrderDTO {
        for (const order of this.orderList) {
            if (order.code === orderCode) {
                order.items = order.items.filter(item => item.id !== id)
                return order
            }

        }
        throw new Error("Order must be defined and exist on db")
    }

    removeOrder(orderCode: string) {
        this.orderList = this.orderList.filter(({ code }) => code !== orderCode)

    }

    addOrder(): OrderDTO[] {
        let newOrder = {
            code: `${Math.floor(Math.random() * (100000))}`,
            items: []

        }
        this.orderList.push(newOrder)
        return this.orderList
    }

    getSubtotal(orderCode: String): number {
        let subTotal = 0
        for (const order of this.orderList) {
            if (orderCode === order.code) {
                subTotal = order.items.reduce((sum, { price }) => sum + price, 0)
            }
        }
        return subTotal
    }

    getTaxes(orderCode: string): number {
        let taxes = 0
        for (const order of this.orderList) {
            if (orderCode === order.code) {
                for (const item of this.orderList) {
                    if (item instanceof TaxItem) {
                        taxes += item.getTax()
                    }

                }

            }
        }
        return taxes
    }


    getTotal(orderCode: string): number {
        let total = 0
        for (const order of this.orderList) {
            if (orderCode === order.code) {
                total = this.getTaxes(orderCode) + this.getSubtotal(orderCode)
            }
        }
        return total

    }

}


