let userWrap = document.getElementById('user-wrap')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div')
            div.classList.add('user')
            div.innerHTML = `<b>Id</b> - ${user.id}<br> <b>Name</b> - ${user.name}`

            let btn = document.createElement('button')
            btn.innerText = 'Details'
            btn.classList.add('button')
            
            btn.onclick = () => {
                location.href = `user-details.html?userId=${user.id}`
            }
            div.append(btn)
            userWrap.append(div)
        }
    })
