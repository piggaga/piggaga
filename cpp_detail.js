// detail.js

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index')); // 將字符串轉換為整數

    fetch("cpp.json")
        .then(response => response.json())
        .then(posts => {
            const post = posts[index];

            const postDetail = document.getElementById("post-detail");
            const postTitle = document.createElement("h3");
            postTitle.textContent = post.title;

            const postImage = document.createElement("img");
            postImage.classList.add("post-image");

            // 檢查圖片是否存在，若不存在則設置為預設圖片
            if (post.image && post.image.trim() !== "") {
                postImage.src = post.image;
            } else {
                postImage.src = "images/none.jpg"; // 設置為預設圖片的路徑
            }

            const postContent = document.createElement("p");
            postContent.textContent = post.content;

            postDetail.appendChild(postTitle);
            postDetail.appendChild(postImage);
            postDetail.appendChild(postContent);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
        });
});
