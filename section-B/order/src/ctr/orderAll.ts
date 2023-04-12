import { masterDb } from "../db/knex"

interface IResponse<T> {
    data: string | null | object | T
    status: number
    devMessage: string
}


async function orderAll(): Promise<IResponse<any>> {
    

    const { rows: queryAll } = await masterDb.raw(/*sql */`
        select * from order
            order by order_id
    `)

    return {
        data: queryAll,
        status: 200,
        devMessage: 'Success'
    }
}

export default orderAll