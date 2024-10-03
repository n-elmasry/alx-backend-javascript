
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with data when success is true', (done) => {
        getPaymentTokenFromAPI(true).then((result) => {
            expect(result).to.deep.equal({ data: 'Successful response from the API' });
            done(); // Signal that the async test is complete
        }).catch(done); // Catch any errors and pass them to Mocha
    });

    it('should do nothing when success is false', (done) => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined; // It implicitly returns undefined
        done(); // No asynchronous operation here, but call done to complete the test
    });
});
