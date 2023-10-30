const { Router } = require('express');

const router = Router();

const supermarkets = [
  {
    store: 'daals',
  },
  {
    store: 'rice',
  },
  {
    store: 'oils',
  },
  {
    store: 'detergent',
  },
];

router.get('/stores', (req, res) => {
  res.send(supermarkets);
});

module.exports = router;