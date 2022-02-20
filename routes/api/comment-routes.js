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

router.put('/', async (req, res) => {
    if (req.session.loggedIn) {
        console.log(req.body.id)
        const comment = await Comment.findByPk(req.body.id)
        console.log(comment.toJSON())
        if (comment.user_id != req.session.userId) {
            res.status(400).send()
            return
        }
        

        comment.text = req.body.text
        await comment.save()
        res.status(200).end()
        return
    }
})

router.delete('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login')
        return
    }

    const comment = await Comment.findByPk(req.params.id, { raw: true })

    if (req.session.userId == comment.user_id) {
        await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send()
    }
})

module.exports = router;