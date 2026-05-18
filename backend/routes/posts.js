const express = require("express");
const router = express.Router();

// Get all posts
router.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            title: "First Blog",
            content: "Welcome to Blog App"
        }
    ]);
});

// Create post
router.post("/", (req, res) => {

    const post = req.body;

    res.json({
        message: "Post created successfully!",
        post
    });
});

// Update post
router.put("/:id", (req, res) => {

    res.json({
        message: "Post updated!"
    });
});

// Delete post
router.delete("/:id", (req, res) => {

    res.json({
        message: "Post deleted!"
    });
});

module.exports = router;