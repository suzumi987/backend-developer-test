import { masterDb } from "../db/knex"


interface IResponse {
    data: string | null | object
    status: number
    devMessage: string
}


async function inventoryUpdate (body: any): Promise<IResponse> {

    const {rows: update} = await masterDb.raw(/*sql */`
        update inventory 
            set ()
        where inventory_id = ${body.inventory_id}
        returning inventory_id
    `)

    return {
        data: update,
        status: 200,
        devMessage: 'Success'
    }
}

export default inventoryUpdate