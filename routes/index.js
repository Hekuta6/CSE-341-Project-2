const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tag=['Hello World']
    res.send('Hello World')
})
router.use('/music', require('./music'));

module.exports = router;