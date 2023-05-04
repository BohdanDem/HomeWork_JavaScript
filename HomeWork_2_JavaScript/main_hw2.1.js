//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
//=================================================================================================================

let array = [22, 89, true, 'name', false, 'hello', undefined, null, 25.3, 'the end']

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])
console.log(array[7])
console.log(array[8])
console.log(array[9])

console.log('=======================================')

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
//=================================================================================================================

let firstBook = {
    title: 'Kobzar',
    pageCount: 405,
    genre: 'poetry'
}

let bestBook = {
    title: '1984',
    pageCount: 360,
    genre: 'dystopia novel'
}

let Book = {
    title: 'To Kill a Mockingbird',
    pageCount: 290,
    genre: 'drama'
}

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//===============================================================================================================

let fineBook = {
    title: 'The Little Prince',
    pageCount: 524,
    genre: 'fantasy',
    authors: [
        {name: 'Antoine Marie', age: 56},
        {name: 'de Saint-Exupery', age: 68}
    ]
}

let bestSellersBook = {
    title: 'Fahrenheit 451',
    pageCount: 255,
    genre: 'novel',
    authors: [
        {name: 'Ray Bradbury', age: 46},
        {name: 'Ray Bradbury Younger', age: 25}
    ]
}

let curiousBook = {
    title: 'The Hobbit',
    pageCount: 366,
    genre: 'story',
    authors: [
        {name: 'John Ronald', age: 57},
        {name: 'Reuel Tolkien', age: 58}
    ]
}

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//=================================================================================================================

let users = [
    {name: 'Bohdan', username: 'demBoh', password: '75fg#55'},
    {name: 'Olia', username: 'Olka', password: '365466asd'},
    {name: 'Anna', username: 'Annushka', password: '2548@dd'},
    {name: 'Stepan', username: 'Step', password: '789oo$'},
    {name: 'Oleh', username: 'OleOle', password: '$ooo568'},
    {name: 'Oksana', username: 'sanOK', password: 'xcv78@'},
    {name: 'Hanna', username: 'HaNNa', password: '7xrf!@'},
    {name: 'Olena', username: 'Olenka', password: 'vbf459'},
    {name: 'Ivan', username: 'Ivan', password: 'dr45@78'},
    {name: 'Tania', username: 'TaNNia', password: '457ss@#'}
]

console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

console.log('=======================================')





