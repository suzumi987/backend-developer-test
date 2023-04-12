import { masterDb } from "../db/knex"

interface IResponse {
    data: string | null | object
    status: number
    devMessage: string
}



async function orderCreate(req: any): Promise<IResponse> {

    const { rows: [insertOrder] } = await masterDb.raw(/*sql */`
        insert into order (order_name, order_description)
            valuse (${req.body.order_name, req.body.order_description})
        returning order_id
    `)

    return {
        data: { order_id: insertOrder.order_id },
        status: 200,
        devMessage: 'Success'
    }
}

export default orderCreate