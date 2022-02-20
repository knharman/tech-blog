const Comment = require('../../models/Comment');

const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            await Comment.create({
                text: req.body.comment,
                user_id: req.session.userId,
                post_id: req.body.postId
            })
            res.redirect('/posts/' + req.body.postId)
        } else {
            res.redirect('/login')
        }
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;