let userUrl = new URL(location.href)
let id = userUrl.searchParams.get('userId')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(person => {
        let user = document.createElement('div')
        user.classList.add('user')

        const ul = document.createElement('ul')
        userBuild(person, ul)
        user.appendChild(ul)

        let btn = document.createElement('button')
        btn.classList.add('post-of-current-user')
        btn.innerText = `Post of current user`

        btn.onclick = () => {
            postTitleWrap.style.display === 'none'
                ? postTitleWrap.style.display = 'block'
                : postTitleWrap.style.display = 'none'
        }

        let postTitleWrap = document.createElement('div')
        postTitleWrap.classList.add('post-title-wrap')
        postTitleWrap.style.display = 'none'

        document.body.append(user, btn, postTitleWrap)

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${person.id}`)
            .then((response) => response.json())
            .then((posts) => {
                for (const post of posts) {
                    let div = document.createElement('div')
                    div.classList.add('post')

                    let postTitle = document.createElement('div')
                    postTitle.innerHTML = `${post.title}`

                    let btn = document.createElement('button')
                    btn.classList.add('post-details')
                    btn.innerText = `Post Details`

                    btn.onclick = () => {
                        location.href = `post-details.html?postId=${post.id}`
                    }

                    div.append(postTitle, btn)
                    postTitleWrap.appendChild(div)
                }
        });
    })
function userBuild(object, parent) {
    for (const key in object) {
        typeof object[key] === 'object'
            ? ulBuilder(key, object[key], parent)
            : liBuilder(key, object[key], parent)
    }
}
function liBuilder(key, value, parent) {
    const li = document.createElement('li')
    li.innerHTML = `<b>${key}:</b> ${value}`
    parent.appendChild(li)
}

function ulBuilder(key, object, parent) {
    const li = document.createElement('li')
    const ul = document.createElement('ul')
    li.innerHTML = `<b>${key}:</b>`
    parent.appendChild(li)
    li.appendChild(ul)
    userBuild(object, ul)
}
