const router = require('express').Router();

/**
 * route for "/"
 * homepage
 */
router.get('/', async (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

/**
 * route for "/dashboard"
 * dashboard
 */
 router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        // req.session.loggedIn
    });
});

/**
 * route for "/login"
 * login
 */
 router.get('/login', async (req, res) => {
    res.render('login', {
        // req.session.loggedIn
    });
});

module.exports = router;