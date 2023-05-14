//стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {title: '1984', pageNumb: 256, author: ['Oleh'], genre: ['poem']},
    {title: 'Kobzar', pageNumb: 786, author: ['Taras', 'Bohdan'], genre: ['poem']},
    {title: 'The Great Gatsby', pageNumb: 456, author: ['F. Scott Fitzgerald'], genre: ['drama', 'story']},
    {title: 'Hamlet', pageNumb: 658, author: ['William', 'Shakespeare'], genre: ['poem', 'drama']}
]


// -знайти наібльшу книжку.

console.log('1------------1')

let bigBook = 0

for (const book of books) {
    if (book.pageNumb > bigBook) {
        bigBook = book.pageNumb
    }
}

console.log(bigBook)

// - знайти книжку/ки з найбільшою кількістю жанрів

console.log('2------------2')

let maxBookGen = []
let max = 0

for (let i = 0; i < books.length; i++) {
    const book = books[i];
    if (book.genre.length > max) {
        max = book.genre.length
        maxBookGen = [book]
    }
    else if (max === book.genre.length) {
        maxBookGen.push(book)
    }
}

console.log(maxBookGen);

// - знайти книжку/ки з найдовшою назвою

console.log('3------------3')

let bigBookLen = books[0]

for (let i = 1; i < books.length; i++) {
    const book = books[i];
    if (book.title.length > bigBookLen.title.length) {
        bigBookLen = book
    }
}

console.log(bigBookLen)

// - знайти книжку/ки які писали 2 автори

console.log('4------------4')

let twoAuthor = []

for (const book of books) {
    if (book.author.length === 2) {
        twoAuthor.push(book)
    }
}

console.log(twoAuthor)

// - знайти книжку/ки які писав 1 автор

console.log('5------------5')

let oneAuthor = []

for (const book of books) {
    if (book.author.length === 1) {
        oneAuthor.push(book)
    }
}

console.log(oneAuthor)










