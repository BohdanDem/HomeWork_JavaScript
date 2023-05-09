//стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {title: '1984', pageNumb: 256, author: 'Oleh', genre: 'poem'},
    {title: 'Kobzar', pageNumb: 786, author: ['Taras', 'Bohdan'], genre: 'poem'},
    {title: 'The Great Gatsby', pageNumb: 456, author: 'F. Scott Fitzgerald', genre: ['drama', 'story']},
    {title: 'Hamlet', pageNumb: 658, author: ['William', 'Shakespeare'], genre: ['poem', 'drama']}
]

// -знайти наібльшу книжку.

for (const book of books) {
    let bigBook = 0
    if (book.pageNumb > bigBook) {
        bigBook = book.pageNumb
    }
    console.log(bigBook)
}

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

for (let book of books) {
    if (book.author === 1) {
        console.log(book.title)
    }
}

