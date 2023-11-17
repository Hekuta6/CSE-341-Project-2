const router = require('express').Router();

//router.get('/', (req, res) => {res.send('Hello World');});

router.use('/music', require('./music'));
router.use('/food', require('./food'));

module.exports = router;