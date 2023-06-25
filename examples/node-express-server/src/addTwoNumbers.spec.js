
 
 
 
const { addTwoNumbers } = require('./addTwoNumbers');

describe('addTwoNumbers', () => {
    it('should return the correct sum of two numbers', () => {
        const num1 = 5;
        const num2 = 10;
        const expectedSum = 15;
        const actualSum = addTwoNumbers(num1, num2);
        expect(actualSum).toEqual(expectedSum);
    });
});