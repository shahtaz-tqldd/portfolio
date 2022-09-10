import posts from './blogs.json' assert {type: 'json'};
// console.loag(posts)
const loadPost =()=>{
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const postDiv = document.createElement('div')
        postDiv.classList.add("col")
        postDiv.innerHTML = `
            <div class="card bg-dark border-0">
            <img src="${post.image}" class="card-img-top blog-img" alt="...">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.body.slice(0, 100) + '...'}</p>
              <button class="btn btn-secondary shadow-lg" onclick=readPost(${post._id})>Read More</button>
            </div>
          </div>
        `
        postContainer.appendChild(postDiv);
    })
}



loadPost();