const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log'); // Spy on console.log
  });

  afterEach(() => {
    consoleLogSpy.restore(); // Restore the console log spy after each test
  });

  it('should log the correct total for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1); // Verify it was called once
  });

  it('should log the correct total for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log called with the correct message
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleLogSpy.callCount).to.be.equal(1); // Verify it was called once
  });
});
