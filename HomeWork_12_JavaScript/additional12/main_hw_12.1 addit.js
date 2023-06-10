// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         for (const user of users) {
//             let div = document.createElement('div')
//             div.style.marginBottom = '20px'
//             div.classList.add('user')
//             div.innerHTML = `Id - ${user.id}; Name - ${user.name}`
//
//             let btn = document.createElement('button')
//             btn.innerText = 'POSTS'
//             btn.classList.add('button')
//             btn.style.marginLeft = '20px'
//
//             div.appendChild(btn)
//             document.body.append(div)
//         }
//     })
//
// let btn = document.getElementsByClassName('button')
// let div = document.getElementsByClassName('user')
//
// btn.onsubmit = function (ev) {
//     ev.preventDefault()
//
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
//         .then((response) => response.json())
//         .then(response => console.log(response));
//}

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())

const fetchComments = fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())

Promise.all([fetchUsers, fetchPosts, fetchComments])
    .then(result => {
        const [users, posts, comments] = result
        console.log(result);
    })








