import { masterDb } from '../db/knex'

interface IResponse {
    data: string | null | object
    status: number
    devMessage: string
}


async function getProductAll(): Promise<IResponse> {

    const { rows: queryProduct } = await masterDb.raw(/*sql */`
        select * from product
        order by product_id
    `)
    return {
        data: queryProduct,
        status: 200,
        devMessage: 'Success'
    }
}

export default getProductAll