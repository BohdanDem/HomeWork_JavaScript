// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

console.log('1----------------1')

function cutString(str, n) {
    let res = [];
    for (let i = 0; i < str.length; i += n) {
        res.push(str.substring(i, i + n));
    }
    return res;
}

console.log(cutString('наслаждение',3))

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

console.log('2----------------2')

let str = 'Каждый охотник желает знать'
const deleteCharacters = (string, len) => {
    return  string.substring(0, len)
}

console.log(deleteCharacters(str, 7))

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

document.write(`<div>3----------------3</div>`)

let str2 = "HTML JavaScript PHP"
const insertDash = (str) => str.toUpperCase().replaceAll(' ', '-')


document.write(insertDash(str2))

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

console.log('4----------------4')

let str3 = 'i learn javascript'

const changeFirstReg = (string) => string.charAt(0).toUpperCase() + string.slice(1)

console.log(changeFirstReg(str3))

// Дано список імен.

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд

console.log('5----------------5')

const nameCorrector = (string) => {
    return string
        .replaceAll('.', ' ')
        .replaceAll('-', ' ')
        .replaceAll('_', ' ')
        .replaceAll('=', ' ')
        .replaceAll('+', ' ')
        .replaceAll('-', ' ')
        .split(' ').filter((item) => item.length).join(' ')
}

console.log(nameCorrector(n1))
console.log(nameCorrector(n2))
console.log(nameCorrector(n3))

// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

console.log('6---------------6')

let array = []

function fillArray(array) {
    for (let i = 0; array.length < 10; i++) {
        array.push(Math.round(Math.random()*100))
    }
    return array
}

console.log(fillArray(array))

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

console.log('7----------------7')

console.log(array.sort((a, b) => {
    return a - b
}))

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// залишивши тільки парні числа (без 0!)

console.log('8----------------8')

let array2 = []

console.log(fillArray(array2))

const even = array2.filter((item) => item % 2 === 0 || item === 0)

console.log(even);

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

console.log('9----------------9')

let profile = 'my name is bohdan'

const capitalize = (string) => {
    string = string.split(' ')
    let words = [];
    string.forEach((item) => {
             words.push(item.charAt(0).toUpperCase() + item.slice(1))
        })
    return words.join(' ')
}

console.log(capitalize(profile))

// Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

console.log('10----------------10')

let st1 = 'someemail@gmail.com'
let st2 = 'someeMAIL@gmail.com'
let st3 = 'someeMAIL@i.ua'
let st4 = 'some.email@gmail.com'

const validatorEmail = str => {
    let strSplit = str.split('@')
    if (str.includes('@')
        && strSplit[1].includes('.')) {
            let strSplitDot = strSplit[1].split('.')
            if (strSplit[0].length >= 1
                && strSplitDot[0].length >= 2) {
                console.log('This email address is valid')
            }
            else {
                console.log('This email address is not valid')
            }
        }
    else {
        console.log('This email address is not valid')
    }
}

const validatorEmail2 = str => {
    if (str.includes('@')
        && str.includes('.', str.indexOf('@'))
        && (str.indexOf('.', str.indexOf('@')) - str.indexOf('@') > 2)
        && str.indexOf('@') !== 0) {
        console.log('This email address is valid')
    } else {
        console.log('This email address is not valid')
    }
}

validatorEmail(st1)
validatorEmail2(st2)
validatorEmail(st3)
validatorEmail2(st4)

// відсортувати масив в спадаючому порядку за кількістю елементів в полі modules

coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('11----------------11')

const sortArr = (coursesArray.sort((a, b) => {
    return b.modules.length - a.modules.length
}))

console.log(sortArr);

//  Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

console.log('12----------------12')

let str4 = "Астрономия это наука о небесных объектах"
let symbol = "о"

const count = ((string, stringSearch) => {
    let countLetters = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === stringSearch) {
            countLetters ++
        }
    }
    return countLetters
})

// const count = ((string, stringSearch) => {
//     let countLetters = 0
//     let position = string.indexOf(stringSearch);
//     while (position !== -1) {
//         countLetters++;
//         position = string.indexOf(stringSearch, position + 1);
//     }
//     return countLetters
// })

console.log(count(str4, symbol))

// Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

console.log('13----------------13')

let str5 = "Сила тяжести приложена к центру масс тела"

const cutString2 = ((string, n) => {
    string = string.split(' ')
    let cString = []
    for (let i = 0; i < string.length; i++) {
        if ( i === n ) {
            break
        }
        else cString.push(string[i])
    }
    return cString.join(' ')
})

console.log(cutString2(str5, 3))

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).

const books = [
    {title: '1984', pageNumb: 256, author: ['Oleh'], genre: ['poem']},
    {title: 'Kobzar', pageNumb: 786, author: ['Taras', 'Bohdan'], genre: ['poem']},
    {title: 'The Great Gatsby', pageNumb: 456, author: ['F. Scott Fitzgerald'], genre: ['drama', 'story']},
    {title: 'Hamlet', pageNumb: 658, author: ['William', 'Shakespeare'], genre: ['poem', 'drama']}
]

// знайти наібльшу книжку

console.log('14----------------14')

let bigBook = books[0].pageNumb
books.forEach((book) => {
    if (book.pageNumb > bigBook) {
        bigBook = book
    }
})

console.log(bigBook);

// знайти книжку/ки з найбільшою кількістю жанрів

console.log('15----------------15')

let sortedBooks = books.sort((a1, b1) => {
    return b1.genre.length - a1.genre.length
})

let bMGenre = sortedBooks[0].genre.length
let bookMaxGenre = sortedBooks.filter((book) => book.genre.length === bMGenre)

console.log(bookMaxGenre);

// знайти книжку/ки з найдовшою назвою

console.log('16----------------16')

let sortedBooksLength = books.sort((a1, b1) => {
    return b1.title.length - a1.title.length
})

let bMTitle = sortedBooksLength[0].title.length
let bookMaxTitle = sortedBooksLength.filter((book) => book.title.length === bMTitle)

console.log(bookMaxTitle);

// знайти книжку/ки які писали 2 автори

console.log('17------------17')

let twoAuthors = books.filter((book) => book.author.length === 2)

console.log(twoAuthors)

// знайти книжку/ки які писав 1 автор

console.log('18------------18')

let oneAuthor = books.filter((book) => book.author.length === 1)

console.log(oneAuthor)

// вісортувати книжки по кількості сторінок по зростанню

console.log('19------------19')

let sortBookPage = books.sort((h, k) => {
    return h.pageNumb - k.pageNumb
})

console.log(sortBookPage);









