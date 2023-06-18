// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        for (const post of posts) {
            let div = document.createElement('div')
            div.classList.add('posts')
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
            userComments.classList.add('user-comments')
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
            document.body.appendChild(div)
        }
    })

