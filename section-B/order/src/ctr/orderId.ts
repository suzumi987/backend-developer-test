import { masterDb } from "../db/knex"

interface IResponse<T> {
    data: string | null | object | T
    status: number
    devMessage: string
}


async function orderId(id: any): Promise<IResponse<any>> {
    

    const { rows: orderID } = await masterDb.raw(/*sql */`
        select * from order
            where order_id = ${id}
        limit 1
    `)

    return {
        data: orderID,
        status: 200,
        devMessage: 'Success'
    }
}

export default orderId