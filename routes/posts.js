const Post = require('../models/Post');
const User = require('../models/User');
const router = require('express').Router();
const sequelize = require('sequelize');

/**
 * GET
 * /posts/id
 */
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id, {
        include: [
            User
        ]
    }) 

    res.render('post', {
        shouldBeAbleToDelete: post.owner_id == req.session.userId,
        loggedIn: req.session.loggedIn, 
        title: post.title, 
        body: post.body, 
        username: post.user.username, 
        date: post.createdAt,
        id: req.params.id
    });
})

module.exports = router;