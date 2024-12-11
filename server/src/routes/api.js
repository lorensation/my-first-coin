const express = require('express');
const router = express.Router();

// Example route
router.get('/tokenomics', (req, res) => {
  res.status(200).json({
    totalSupply: '1,000,000,000 $MFC',
    liquidity: 'Locked for 1 year',
    transactionFee: '0%',
  });
});

module.exports = router;
