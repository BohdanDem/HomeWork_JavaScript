let userUrl = new URL(location.href)
let Id = userUrl.searchParams.get('postId')

fetch(`https://jsonplaceholder.typicode.com/posts/${Id}`)
    .then(response => response.json())
    .then(post => {
        let addToPost = document.getElementById('post')
        let div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <b>UserId</b> - ${post.userId}, <b>Post Id</b> - ${post.id}<br>
        <b>Title</b> - ${post.title}<br>
        <b>Body</b> - ${post.body}
        `
        addToPost.appendChild(div)
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${Id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let addToComment = document.getElementById('comment')
        for (const comment of comments) {
            let div = document.createElement('div')
            div.classList.add('comment')
            div.innerHTML = `
            <b>Comment Id</b> - ${comment.id}<br>
            <b>Post Id</b> - ${comment.postId}<br>
            <b>Name</b> - ${comment.name}<br>
            <b>Email</b> - ${comment.email}<br>
            <b>Body</b> - ${comment.body}
            `
            addToComment.appendChild(div)
        }
    })

