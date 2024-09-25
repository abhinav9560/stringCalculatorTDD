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

    test('should handle multiple numbers separated by commas', () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("4,5,6,7")).toBe(22);
    });

    test('should handle numbers separated by newline characters', () => {
        expect(add("1\n2")).toBe(3);
        expect(add("3\n4\n5")).toBe(12);
    });

    test('should handle a mix of commas and newline characters as delimiters', () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("4,5\n6")).toBe(15);
    });
});