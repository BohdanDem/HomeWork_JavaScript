// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {
        title: "id labore ex et quam laborum",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        title: "quo vero reiciendis velit similique earum",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        title: "odio adipisci rerum aut animi",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        title: "alias odio sit",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        title: "vero eaque aliquid doloribus et culpa",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
]

let userComments = document.createElement('div')
userComments.classList.add('comments')

for (const comment of comments) {
    let div = document.createElement('div')
    div.classList.add('comment')
    div.style.marginBottom = '20px'
    div.innerHTML = `<b>Title</b> - ${comment.title}`

    let button = document.createElement('button')
    button.innerText = 'COMMENT'
    button.classList.add('comment')
    button.style.marginLeft = '30px'

    button.onclick = () => {
        body.style.display === 'block'
            ? body.style.display = 'none'
            : body.style.display = 'block'
    }

    let body = document.createElement('div')
    body.classList.add('body')
    body.innerHTML = `<b>Body</b> - ${comment.body}`
    body.style.marginTop = '7px'
    body.style.display = 'block'

    div.append(button, body)
    userComments.appendChild(div)
}

document.body.appendChild(userComments)
