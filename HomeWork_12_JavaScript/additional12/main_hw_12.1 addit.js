// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div')
            div.style.marginBottom = '20px'
            div.style.background = "aquamarine"
            div.classList.add('user')
            div.innerHTML = `<b>Id</b> - ${user.id}; <b>Name</b> - ${user.name}`

            let btn = document.createElement('button')
            btn.innerText = 'POSTS'
            btn.classList.add('button')
            btn.style.marginLeft = '20px'

            btn.onclick = () => {
                userPosts.style.display === 'none'
                    ? userPosts.style.display = 'block'
                    : userPosts.style.display = 'none'
            }

            let userPosts = document.createElement('div')
            userPosts.classList.add('posts')
            userPosts.style.display = 'none'

            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                .then((response) => response.json())
                .then((posts) => {
                    for (const post of posts) {
                        let div = document.createElement('div')
                        div.classList.add('post')
                        div.style.marginBottom = '20px'
                        div.style.background = "#a0eefe"

                        let h4 = document.createElement('h4')
                        let p = document.createElement('p')

                        h4.innerHTML = `<b><i>Post number</i></b> ${post.id} ${post.title}`
                        p.innerHTML = `${post.body}`

                        let btnCom = document.createElement('button')
                        btnCom.innerText = 'COMMENTS'
                        btnCom.classList.add('comment')
                        btnCom.style.marginLeft = '20px'

                        btnCom.onclick = () => {
                            userComments.style.display === 'none'
                                ? userComments.style.display = 'block'
                                : userComments.style.display = 'none'
                        }

                        let userComments = document.createElement('div')
                        userComments.classList.add('comments')
                        userComments.style.display = 'none'

                        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                            .then((response) => response.json())
                            .then((comments) => {
                                for (const comment of comments) {
                                    let div = document.createElement('div')
                                    div.classList.add('comment')
                                    div.style.marginBottom = '20px'
                                    div.style.background = "lightgray"

                                    let h4 = document.createElement('h4')
                                    let p = document.createElement('p')

                                    h4.innerHTML = `<b><i>Comment number</i></b> ${comment.id} ${comment.name}`
                                    p.innerHTML = `${comment.body}`

                                    div.append(h4, p)
                                    userComments.appendChild(div)
                                }
                            })

                        div.append(h4, p, btnCom, userComments)
                        userPosts.appendChild(div)
                    }
                });

            div.append(btn, userPosts)
            document.body.append(div)
        }
    })
