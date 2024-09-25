// stringCalculator.test.js
const add = require('./index');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself if only one number is provided', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two numbers separated by a comma', () => {
        expect(add("1,2")).toBe(3);
        expect(add("5,7")).toBe(12);
    });

});