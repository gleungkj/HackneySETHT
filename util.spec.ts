import { isPostCodeValid } from "./util";

describe('isPostCodeValid', () => {
    it('should return true if Post Code is valid',() => {
        const validPostCode = 'S32MX'
        const result = isPostCodeValid(validPostCode)
        expect(result).toEqual(true)
    })
    it('should return false if Post Code is invalid',() => {
        const invalidPostCode = 'S3112MXA'
        const result = isPostCodeValid(invalidPostCode)
        expect(result).toEqual(false)
    })
})

