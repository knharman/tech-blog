const Post = require('../models/Post');

const router = require('express').Router();

/**
 * GET
 * /posts/id
 */
router.get('/:id', async (req, res) => {
    const post = await Post.findByPk(req.params.id)

    res.render('post', {
        shouldBeAbleToDelete: post.owner_id == req.session.userId,
        loggedIn: req.session.loggedIn, 
        title: 'Why MVC is so important', 
        body: 'Here is the post', 
        username: 'wigg', 
        date: '2/18/2022', 
        id: req.params.id
    });
})

module.exports = router;