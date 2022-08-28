function getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => getPostData(data));
}

function getPostData(posts) {
    const getpost = document.getElementById('showpost');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <span>userId ${post.userId}</span>
            <h2>Title: ${post.title}</h2>
            <p> Description: ${post.body}</p>
        `;
        getpost.appendChild(postDiv);
        //console.log(post);
    }
}



getPost();