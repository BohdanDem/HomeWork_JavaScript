// -- взять массив пользователей

// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];

let users = document.getElementById('users')
printUsers()

function printUsers() {
    for (const user of usersWithAddress) {
        let usersBlock = []
        let div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `<b>Id</b> - ${user.id}, <b>Name</b> - ${user.name}, <b>Age</b> - ${user.age}, <b>Status</b> - ${user.status}<br>
        Address: <b>City</b> - ${user.address.city}, <b>Street</b> - ${user.address.street}, <b>Number</b> - ${user.address.number}`
        usersBlock.push(div)
        users.appendChild(...usersBlock)
    }
}

function replaceUsers() {
    let usersBlock = []
    for (const user of usersWithAddress) {
        let div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `<b>Id</b> - ${user.id}, <b>Name</b> - ${user.name}, <b>Age</b> - ${user.age}, <b>Status</b> - ${user.status}<br>
        Address: <b>City</b> - ${user.address.city}, <b>Street</b> - ${user.address.street}, <b>Number</b> - ${user.address.number}`
        usersBlock.push(div)
    }
    users.replaceChildren(...usersBlock)
}

//===============================================================================

let status = document.getElementById('userFalse')
status.onclick = function (ev) {
    userStatus()
}

let age = document.getElementById('userAge')
age.onclick = function (ev) {
    userAge()
}

let city = document.getElementById('userKyiv')
city.onclick = function (ev) {
    userCity()
}

//===============================================================================

//verification of user status checkbox
function userStatus() {
    let userFalse = document.getElementById("userFalse");

    if (userFalse.checked === true){
        filterStatus()
    } else {
        replaceUsers()
    }
}

function userAge() {
    let userCheckAge = document.getElementById("userAge");

    if (userCheckAge.checked === true){
        filterAge()
    } else {
        replaceUsers()
    }
}

function userCity() {
    let userCheckCity = document.getElementById("userKyiv");

    if (userCheckCity.checked === true){
        filterCity()
    } else {
        replaceUsers()
    }
}

//===============================================================================

// filtering users by status (leave only with false)
function filterStatus() {
    let usersWithAddressStatus = usersWithAddress.filter(user => !user.status)
    let usersBlock = []
    for (const user of usersWithAddressStatus) {
        let div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `<b>Id</b> - ${user.id}, <b>Name</b> - ${user.name}, <b>Age</b> - ${user.age}, <b>Status</b> - ${user.status}<br>
        Address: <b>City</b> - ${user.address.city}, <b>Street</b> - ${user.address.street}, <b>Number</b> - ${user.address.number}`
        usersBlock.push(div)
    }
    users.replaceChildren(...usersBlock)
}

// filtering users by age (>=29)
function filterAge() {
    let usersWithAddressAge = usersWithAddress.filter(user => user.age >= 29)
    let usersBlock = []
    for (const user of usersWithAddressAge) {
        let div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `<b>Id</b> - ${user.id}, <b>Name</b> - ${user.name}, <b>Age</b> - ${user.age}, <b>Status</b> - ${user.status}<br>
        Address: <b>City</b> - ${user.address.city}, <b>Street</b> - ${user.address.street}, <b>Number</b> - ${user.address.number}`
        usersBlock.push(div)
    }
    users.replaceChildren(...usersBlock)
}

// filtering users by city (from Kyiv)
function filterCity() {
    let usersWithAddressCity = usersWithAddress.filter(user => user.address.city === 'Kyiv')
    let usersBlock = []
    for (const user of usersWithAddressCity) {
        let div = document.createElement('div')
        div.classList.add('user')
        div.innerHTML = `<b>Id</b> - ${user.id}, <b>Name</b> - ${user.name}, <b>Age</b> - ${user.age}, <b>Status</b> - ${user.status}<br>
        Address: <b>City</b> - ${user.address.city}, <b>Street</b> - ${user.address.street}, <b>Number</b> - ${user.address.number}`
        usersBlock.push(div)
    }
    users.replaceChildren(...usersBlock)
}