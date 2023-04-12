import { masterDb } from '../db/knex'

interface IResponse {
    data: string | null | object
    status : number
    devMessage: string
}

async function getProductId(id: any): Promise<IResponse> {

    const { rows: [queryProduct] } = await masterDb.raw(/*sql*/`
        select * from product
            where product_id = ${id}
        limit 1
    `)

    if (!queryProduct) {
        return {
            data: null,
            status: 404,
            devMessage: 'not found'
        }
    }

    return {
        data: queryProduct,
        status: 200,
        devMessage: 'Success'
    }
}

export default getProductId