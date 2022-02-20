const postRoutes = require('./post-routes');
const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');
/**
 * route for "/"
 * homepage
 */
router.get('/', async (req, res) => {
    const allPosts = await Post.findAll({
        attributes: ['id', 'title', 'body', 'owner_id', 'createdAt'],
        raw: true,
        include: [
            User
        ], 
        order: [
            [
                'createdAt', 'DESC'
            ]
        ]
    })
    allPosts.map(post => post.username = post['user.username'])
    res.render('homepage', {
        loggedIn: req.session.loggedIn, 
        posts: allPosts
    });
});

/**
 * route for "/dashboard"
 * dashboard
 */
 router.get('/dashboard', async (req, res) => {

    if(req.session.loggedIn) {
        const allPosts = await Post.findAll({
            attributes: ['id', 'title', 'body', 'owner_id', 'createdAt'],
            raw: true,
            include: [
                User
            ], 
            where: {
                owner_id: req.session.userId
            }, 
            order: [
                [
                    'createdAt', 'DESC'
                ]
            ]
        })
        allPosts.map(post => post.username = post['user.username'])
        res.render('dashboard', {
            loggedIn: req.session.loggedIn, 
            posts: allPosts
        });
    } else { 
        res.redirect('/login')
    }
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

router.use('/posts', postRoutes)

module.exports = router;