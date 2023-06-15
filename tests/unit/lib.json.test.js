//Verify JSON
const {getUser} = require('../../src/lib/lib.json');

describe('JSON: ', () => {
    it('Check JSON object contain property id', () => {
        expect(getUser(1)).toHaveProperty('id', 1);
    });
    it('Check JSON object', () => {
        const expectedObject = {
            id: expect.any(Number), 
            name: expect.any(String),
            isActive: expect.any(Boolean)
        }
        expect(getUser(1)).toMatchObject(expectedObject)
    });
});
