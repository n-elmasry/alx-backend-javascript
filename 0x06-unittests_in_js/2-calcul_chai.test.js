const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {

    // Test cases for 'SUM'
    describe('SUM', function() {
        it('should return 8 when rounding and adding 4.7 and 3.3', function() {
            expect(calculateNumber('SUM', 4.7, 3.3)).to.equal(8);
        });

        it('should return 0 when rounding and adding -1.4 and 1.4', function() {
            expect(calculateNumber('SUM', -1.4, 1.4)).to.equal(0);
        });
    });

    // Test cases for 'SUBTRACT'
    describe('SUBTRACT', function() {
        it('should return 2 when rounding and subtracting 4.7 and 3.3', function() {
            expect(calculateNumber('SUBTRACT', 4.7, 3.3)).to.equal(2);
        });

        it('should return -2 when rounding and subtracting -1.4 and 0.6', function() {
            expect(calculateNumber('SUBTRACT', -1.4, 0.6)).to.equal(-2);
        });
    });

    // Test cases for 'DIVIDE'
    describe('DIVIDE', function() {
        it('should return 2.5 when rounding and dividing 4.7 by 2.3', function() {
            expect(calculateNumber('DIVIDE', 4.7, 2.3)).to.equal(2.5);
        });

        it('should return "Error" when dividing by 0', function() {
            expect(calculateNumber('DIVIDE', 4.7, 0)).to.equal('Error');
        });

        it('should return 0.333... when rounding and dividing 1.4 by 2.8', function() {
            expect(calculateNumber('DIVIDE', 1.4, 2.8)).to.equal(0.3333333333333333);
        });
    });

});
