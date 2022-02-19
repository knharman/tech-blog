const router = require('express').Router();

router.get('/:id', (req, res) => {
    res.render('post', {
        loggedIn: req.session.loggedIn, 
        title: 'Why MVC is so important', 
        body: 'Here is the post', 
        username: 'wigg', 
        date: '2/18/2022', 
        id: req.params.id
    });
})

module.exports = router;