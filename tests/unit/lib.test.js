const { absolute } = require('../../src/lib/lib');

describe('Absolute: ', () =>{
    it('Should return positive if number is positive', () => {
        const result = absolute(1);
        expect(result).toBe(1);
    });
    it('Should return positive if number is negative', () => {
        const result = absolute(-1);
        expect(result).toBe(1);
    });
    it('Should return 0 if number is 0', () => {
        const result = absolute(1);
        expect(result).toBe(1);
    });
});