import { Router, json, response } from 'express';
import { getAddressByPostCode, isPostCodeValid } from './util';

const router = Router()
const jsonParser = json()

export const getAddressesByPostCode = router.post('/', jsonParser, async (req, res) => {
    // get postcode entry from a POST from frontend here, request body postCode NEEDS to be sent as string

    const validatedPostCode:string | false = isPostCodeValid(req.body.postCode) === true ? req.body.postCode : false


    if (validatedPostCode === false) {
        res.status(400).send('PostCode is not valid')
    } else {
        const filteredAddressesByPostCode = await getAddressByPostCode(validatedPostCode)
        res.status(200).send(filteredAddressesByPostCode)
    }    
})