// 3-payment.test.js
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
    let calculateNumberSpy;

    beforeEach(function () {
        // Create a spy for Utils.calculateNumber
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(function () {
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments', function () {
        // Call the function
        sendPaymentRequestToApi(100, 20);

        // Validate that the spy was called with the expected arguments
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    });
});
