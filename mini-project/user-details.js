let userUrl = new URL(location.href)
let id = userUrl.searchParams.get('userId')

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(person => {
        let user = document.getElementById('user-details')

        const ul = document.createElement('ul')
        userBuild(person, ul)

        let btn = document.createElement('button')
        btn.classList.add('post-of-current-user')
        btn.innerText = `Post of current user`

        btn.onclick = () => {
            postTitleWrap.style.display === 'none'
                ? postTitleWrap.style.display = 'block'
                : postTitleWrap.style.display = 'none'
        }

        let postTitleWrapFlex = document.createElement('div')
        postTitleWrapFlex.classList.add('post-title-wrap-flex')

        let postTitleWrap = document.createElement('div')
        postTitleWrap.classList.add('post-title-wrap')
        postTitleWrap.style.display = 'none'

        postTitleWrap.appendChild(postTitleWrapFlex)
        user.append(ul, btn, postTitleWrap)

        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${person.id}`)
            .then((response) => response.json())
            .then((posts) => {
                for (const post of posts) {
                    let div = document.createElement('div')
                    div.classList.add('post')

                    let postTitle = document.createElement('div')
                    postTitle.innerHTML = `<b>Title</b> - ${post.title}`

                    let btn = document.createElement('button')
                    btn.classList.add('post-btn')
                    btn.innerText = `Post Details`

                    btn.onclick = () => {
                        location.href = `post-details.html?postId=${post.id}`
                    }

                    div.append(postTitle, btn)
                    postTitleWrapFlex.appendChild(div)
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
