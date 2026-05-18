const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({
    path: "./backend/.env"
});

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Home Route
app.get("/", (req, res) => {
    res.send("Blog Backend Running");
});

// Posts API
app.use(
    "/api/posts",
    require("./routes/posts")
);

// Comments API
app.use(
    "/api/comments",
    require("./routes/comments")
);

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});