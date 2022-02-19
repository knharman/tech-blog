const { route } = require('.');
const postsRoutes = require('./posts');
const router = require('express').Router();

/**
 * route for "/"
 * homepage
 */
router.get('/', async (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn, 
        posts: [
            {
                title: 'Why MVC is so important', 
                body: 'Here is the post', 
                username: 'wigg', 
                date: '2/18/2022', 
                id: 1
            }, 
            {
                title: 'Object-Relational Mapping', 
                body: 'Here is the post', 
                username: 'wigg', 
                date: '2/18/2022', 
                id: 2
            }
        ]
    });
});

/**
 * route for "/dashboard"
 * dashboard
 */
 router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        loggedIn: req.session.loggedIn, 
        posts: [
            {
                title: 'Why MVC is so important', 
                body: 'Here is the post', 
                username: 'wigg', 
                date: '2/18/2022'
            }, 
            {
                title: 'Object-Relational Mapping', 
                body: 'Here is the post', 
                username: 'wigg', 
                date: '2/18/2022'
            }
        ]
    });
});

/**
 * route for "/login"
 * login
 */
 router.get('/login', async (req, res) => {
    res.render('login', {
        loggedIn: req.session.loggedIn
    });
});

router.use('/posts', postsRoutes)

module.exports = router;