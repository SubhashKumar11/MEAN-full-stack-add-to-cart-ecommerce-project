const express = require('express');
const router = express.Router();
const {getData} = require('../controllers/controllers');
router.post('/register',getData);


module.exports = router;