const express = require('express');
const app = express();
const port = 3001;

app.get('/orders', (req, res) => {
  res.json([
    { id: 1, item: 'Laptop', quantity: 1 },
    { id: 2, item: 'Phone', quantity: 2 }
  ]);
});

app.listen(port, () => {
  console.log(`Order service running on port ${port}`);
});

