import { getAddressesByPostCode } from "./router";
import request from 'supertest'
import * as util from './util'

jest.spyOn(util, 'getAddressByPostCode').mockResolvedValue([{
    unitNumber: 1,
    buildingNumber: 1,
    streetDescription: '',
    locality: '',
    ward: '',
    town: '',
    postCode: ''
}])

describe('getAddressesByPostCode', () => {
    // it should return 400 if validatedPostCode is false
    it('should return 400 if validatedPostCode is false', async () => {
        const res = await request(getAddressesByPostCode).post('/').send({postCode: '123456'})
        expect(res.statusCode).toEqual(400)
    })

    // it should return 200 if validatedPostCode is true
    it('should return 400 if validatedPostCode is true', async () => {
        const res = await request(getAddressesByPostCode).post('/').send({postCode: 'N21WS'})
        expect(res.statusCode).toEqual(200)
    })
})