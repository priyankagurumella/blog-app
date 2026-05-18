const express = require("express");
const router = express.Router();

// Get comments
router.get("/", (req, res) => {

    res.json([
        {
            user: "Priya",
            comment: "Nice blog!"
        }
    ]);
});

// Add comment
router.post("/", (req, res) => {

    const comment = req.body;

    res.json({
        message: "Comment added!",
        comment
    });
});

module.exports = router;