const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const router = require('express').Router();

/**
 * GET
 * /posts/id
 */
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id, {
        include: [
            {model: User}, 
            {model: Comment, include: [User]}
        ]
    }) 

    res.render('post', {
        shouldBeAbleToDelete: post.owner_id == req.session.userId,
        loggedIn: req.session.loggedIn, 
        title: post.title, 
        body: post.body, 
        username: post.user.username, 
        date: post.createdAt,
        id: req.params.id, 
        comments: post.toJSON().comments
    });
})

module.exports = router;