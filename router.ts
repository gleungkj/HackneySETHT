import { Router } from 'express';
import { getAddressByPostCode } from './util';

const router = Router()

export const getAddressesByPostCode = router.get('/', async (req, res) => {
    // get postcode entry from frontend here, request body postCode NEEDS to be sent as string

    const validatedPostCode:string = req.body.postCode

    const allAddresses = await getAddressByPostCode(validatedPostCode)
    res.send(allAddresses)
})