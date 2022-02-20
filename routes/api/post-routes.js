const Post = require('../../models/Post');

const router = require('express').Router();

router.delete('/:id', async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/')
        return
    }

    const post = await Post.findByPk(req.params.id, { raw: true })

    if (req.session.userId == post.owner_id) {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send()
    }
})

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

router.put('/', async (req, res) => {
    if (req.session.loggedIn) {

        const post = await Post.findByPk(req.body.id)

        if (post.owner_id != req.session.userId) {
            res.status(400).send()
            return
        }

        post.title = req.body.title
        post.body = req.body.body
        await post.save()
        res.status(200).end()
        return
    }
})

module.exports = router;