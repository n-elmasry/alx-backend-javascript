const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Test cases for calculateNumber function
describe('calculateNumber', function () {

    // Test for positive numbers
    it('should return the sum of two rounded numbers (4.7 + 3.3 = 8)', function () {
        assert.strictEqual(calculateNumber(4.7, 3.3), 8);
    });

    // Test for rounding both down
    it('should return the sum when both numbers round down (2.4 + 1.2 = 3)', function () {
        assert.strictEqual(calculateNumber(2.4, 1.2), 3);
    });

    // Test for rounding one up and one down
    it('should return the sum when one rounds up and the other rounds down (1.5 + 2.4 = 4)', function () {
        assert.strictEqual(calculateNumber(1.5, 2.4), 4);
    });

    // Test for zero values
    it('should return 0 when both numbers are 0 (0 + 0 = 0)', function () {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    // Test for negative numbers
    it('should return the sum of two negative rounded numbers (-3.7 + -4.2 = -8)', function () {
        assert.strictEqual(calculateNumber(-3.7, -4.2), -8);
    });

    // Test for one positive and one negative number
    it('should return the sum of one positive and one negative number (3.5 + -2.4 = 2)', function () {
        assert.strictEqual(calculateNumber(3.5, -2.4), 2);
    });

});
