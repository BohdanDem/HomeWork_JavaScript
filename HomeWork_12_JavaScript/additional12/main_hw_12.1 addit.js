// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div')
            div.style.marginBottom = '40px'
            div.classList.add('user')
            div.innerHTML = `<b>Id</b> - ${user.id}; <b>Name</b> - ${user.name}`

            let btn = document.createElement('button')
            btn.innerText = 'POSTS'
            btn.classList.add('button')
            btn.style.marginLeft = '20px'

            let userPosts = document.createElement('div')
            userPosts.classList.add('posts')
            
            btn.onclick = function () {
                let id = user.id
                fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then((response) => response.json())
                    .then((posts) => {
                        for (const post of posts) {
                            let div = document.createElement('div')
                            div.classList.add('post')
                            div.style.marginBottom = '40px'

                            let h4 = document.createElement('h4')
                            let p = document.createElement('p')

                            h4.innerHTML = `<b><i>Post number</i></b> ${post.id} ${post.title}`
                            p.innerHTML = `${post.body}`

                            let btn = document.createElement('button')
                            btn.innerText = 'COMMENTS'
                            btn.classList.add('comment')
                            btn.style.marginLeft = '20px'

                            let userComments = document.createElement('div')
                            userComments.classList.add('comments')

                            btn.onclick = function () {
                                let id = post.id
                                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                                    .then((response) => response.json())
                                    .then((comments) => {
                                        for (const comment of comments) {
                                            let div = document.createElement('div')
                                            div.classList.add('comment')
                                            div.style.marginBottom = '40px'

                                            let h4 = document.createElement('h4')
                                            let p = document.createElement('p')

                                            h4.innerHTML = `<b><i>Comment number</i></b> ${comment.id} ${comment.name}`
                                            p.innerHTML = `${comment.body}`

                                            div.append(h4, p)
                                            userComments.appendChild(div)
                                        }
                                    })
                            }

                            div.append(h4, p, btn, userComments)
                            //userPosts.replaceWith(div)
                            //userPosts.replaceWith(...div)
                            //userPosts.replaceChild(...div)
                            //userPosts.replaceChildren(div)
                            //userPosts.replaceChildren(...div)
                            userPosts.appendChild(div)
                        }
                    });
            }

            div.append(btn, userPosts)
            document.body.append(div)
        }
    })

