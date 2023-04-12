import { masterDb } from "../db/knex"
interface IResponse {
    data: string | null | object
    status: number
    devMessage: string
}

async function inventoryProduct(): Promise<IResponse> {

    const { rows: all } = await masterDb.raw(`
        select * from product
        order by product_id
    `)

    return {
        data: all,
        status: 200,
        devMessage: 'Success'
    }
}

export default inventoryProduct