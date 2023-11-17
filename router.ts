import { Router, json } from 'express';
import { getAllAddresses } from './util';

const router = Router()

const jsonParser = json()

export const getAddresses = router.get('/', async (req, res) => {
    const allAddresses = await getAllAddresses()
    res.send(allAddresses)
})

