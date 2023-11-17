import { addressDetails } from "./const"
import { db, sql } from "./database"

export const getAddressByPostCode = async(postcode: string): Promise<addressDetails[]> => {

    // would need either an ORM or manually map the query onto listOfAddresses
    const listOfAddresses = await db.query(sql`
    SELECT unit_number, building_number, street_description, locality, ward, town, postcode 
    FROM public.hackney_address
    WHERE postcode_nospace=${postcode}
    `)

    return listOfAddresses
}

export const isPostCodeValid = (postcode: string): boolean => {
    const regexValidator = new RegExp(/[A-Za-z][1-9][1-9][A-Za-z]{2}/g)
    return regexValidator.test(postcode)
}