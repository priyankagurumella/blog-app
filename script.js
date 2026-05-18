let users = JSON.parse(localStorage.getItem("users")) || [];
let posts = JSON.parse(localStorage.getItem("posts")) || [];

function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    users.push({ username, password, role });

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

    alert("Registered Successfully");
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = users.find(
        u => u.username === username &&
        u.password === password
    );

    if (user) {
        alert("Login Successful");

        document.getElementById("auth")
            .style.display = "none";

        document.getElementById("blog-section")
            .style.display = "block";

        loadPosts();
    } else {
        alert("Invalid Login");
    }
}

function addPost() {
    let title =
        document.getElementById("title").value;

    let content =
        document.getElementById("content").value;

    if (!title || !content) {
        alert("Please enter title and content");
        return;
    }

    posts.push({
        title,
        content,
        comments: []
    });

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    loadPosts();
}

function editPost(index) {

    let newTitle = prompt(
        "Enter new title",
        posts[index].title
    );

    let newContent = prompt(
        "Enter new content",
        posts[index].content
    );

    if (newTitle && newContent) {
        posts[index].title = newTitle;
        posts[index].content = newContent;

        localStorage.setItem(
            "posts",
            JSON.stringify(posts)
        );

        loadPosts();
    }
}

function deletePost(index) {

    posts.splice(index, 1);

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    loadPosts();
}

function addComment(index) {

    let comment =
        document.getElementById(
            "comment-" + index
        ).value;

    if (!comment) {
        alert("Enter comment");
        return;
    }

    posts[index].comments.push(comment);

    localStorage.setItem(
        "posts",
        JSON.stringify(posts)
    );

    loadPosts();
}

function loadPosts() {

    let postDiv =
        document.getElementById("posts");

    postDiv.innerHTML = "";

    posts.forEach((post, index) => {

        postDiv.innerHTML += `
        <div class="post">
            <h3>${post.title}</h3>
            <p>${post.content}</p>

            <button onclick="editPost(${index})">
                Edit
            </button>

            <button onclick="deletePost(${index})">
                Delete
            </button>

            <br><br>

            <input
                id="comment-${index}"
                placeholder="Write comment">

            <button onclick="addComment(${index})">
                Comment
            </button>

            <div>
                ${post.comments
                    .map(c => `<p>💬 ${c}</p>`)
                    .join("")}
            </div>
        </div>
        `;
    });
}