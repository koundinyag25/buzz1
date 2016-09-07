const express = require('express');
const router = express.Router();
const db = require('../databse/queries');
router.get('/words/:key',db.getAllWords);
let boop = router.get('/words/:key/:diff',db.getWordsForDifficulty);



module.exports = router;
