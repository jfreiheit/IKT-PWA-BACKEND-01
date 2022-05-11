const express = require('express');
const router = express.Router();
const Post = require('./models/posts')

// GET all posts
router.get('/posts', async(req, res) => {
    const allPosts = await Post.find();
    console.log(allPosts);
    res.send(allPosts)
})

// GET one post via id
router.get('/posts/:id', async(req, res) => {
    try {
        const post = await Post.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(post);
    } catch {
        res.status(404);
        res.send({
            error: "Post does not exist!"
        });
    }
});

// POST one post
router.post('/posts', async(req, res) => {
    const newPost = new Post({
        title: req.body.title,
        location: req.body.location,
        image_id: req.body.image_id
    })
    await newPost.save();
    res.send(newPost)
})

module.exports = router;