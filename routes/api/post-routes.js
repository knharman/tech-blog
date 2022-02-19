const Post = require('../../models/Post');

const router = require('express').Router();

router.post('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            await Post.create({
                title: req.body.title,
                body: req.body.body,
                owner_id: req.session.userId
            })
        }
        res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;