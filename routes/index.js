const router = require('express').Router();

//router.get('/', (req, res) => {res.send('Hello World');});

router.use('/users', require('./music'));
//router.use('/users', require('./food'));

module.exports = router;