// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    fetch("python.json")
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById("post-list");

            // 將文章列表加入到HTML中
            posts.forEach(post => {
                const postContainer = document.createElement("div");
                postContainer.classList.add("post-container");

                postContainer.addEventListener("click", function () {
                    window.location.href = `python_detail.html?index=${posts.indexOf(post)}`;
                });

                const postTitle = document.createElement("h3");
                postTitle.textContent = post.title;

                const postImage = document.createElement("img");
                postImage.classList.add("post-image");
                if (post.image && post.image.trim() !== "") {
                    postImage.src = post.image;
                } else {
                    postImage.style.display = "none";
                }

                const postContent = document.createElement("p");
                postContent.textContent = post.content;

                postContainer.appendChild(postTitle);
                postContainer.appendChild(postImage);
                postContainer.appendChild(postContent);

                postList.appendChild(postContainer);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
});
