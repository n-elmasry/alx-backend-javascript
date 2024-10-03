const sinon = require("sinon");
const chai = require("chai");
const expect = chai.expect;
const Utils = require("./utils");
const { sendPaymentRequestToApi } = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
    let calculateNumberStub;
    let consoleLogSpy;

    beforeEach(function () {
        // Stub the calculateNumber function to always return 10
        calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);

        // Spy on console.log to verify output
        consoleLogSpy = sinon.spy(console, "log");
    });

    afterEach(function () {
        // Restore the stub and the spy to prevent side effects
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });

    it("should call Utils.calculateNumber with correct arguments and log the correct message", function () {
        sendPaymentRequestToApi(100, 20);

        // Verify the stub was called with the correct arguments
        expect(calculateNumberStub.calledOnce).to.be.true; // Check if it was called once
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true; // Check for correct arguments

        // Verify console.log was called with the correct message
        expect(consoleLogSpy.calledOnce).to.be.true; // Ensure console.log was called once
        expect(consoleLogSpy.calledWith('The total is: ', 10)).to.be.true; // Check the log message
    });
});
