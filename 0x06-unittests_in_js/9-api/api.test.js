const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  // Test for the root endpoint
  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  // Test for the /cart/:id endpoint with a valid number
  it('GET /cart/:id returns correct response for valid id', (done) => {
    const id = 5; // Example cart id
    request.get(`${API_URL}/cart/${id}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart ${id}`);
      done();
    });
  });

  // Test for the /cart/:id endpoint with an invalid id
  it('GET /cart/:id returns 404 for invalid id', (done) => {
    request.get(`${API_URL}/cart/invalidId`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(404); // Ensure it returns 404 for invalid id
      done();
    });
  });

  // Test for the /cart/:id endpoint with a negative number
  it('GET /cart/:id returns correct response for negative id', (done) => {
    const id = -1; // Example negative cart id
    request.get(`${API_URL}/cart/${id}`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart ${id}`);
      done();
    });
  });
});
