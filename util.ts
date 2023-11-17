import { db, sql } from "./database"

export const getAllAddresses = async ():Promise<any> => {
    const addresses = await db.query(sql`SELECT * FROM public.hackney_address`)

    return addresses
}