const express = require('express');


const app = express();
const PORT = 7865;
app.use(express.json());


app.get('/', (_, resp) => {
  resp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, resp) => {
  const { id } = req.params;
  resp.send(`Payment methods for cart ${id}`); // Sending the response
});

app.get('/available_payments', (_,resp) => {
  resp.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
})

app.post('/login', (req,resp) => {
  const { userName } = req.body;
  resp.send(`Welcome ${userName}`)
})
app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
