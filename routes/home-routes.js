const router = require('express').Router();

/**
 * route for "/"
 * homepage
 */
router.get('/', async (req, res) => {
    res.render('homepage', {
        // req.session.loggedIn
    });
});

module.exports = router;