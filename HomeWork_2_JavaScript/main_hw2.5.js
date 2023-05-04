//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numDay = +prompt('Enter the day of the week number:')

switch (numDay) {
    case 1:
        console.log('Sunday - to rest')
        break
    case 2:
        console.log('Monday - rest after weekend')
        break
    case 3:
        console.log('Tuesday - start work')
        break
    case 4:
        console.log('Wednesday - take a brake')
        break
    case 5:
        console.log('Thursday - work')
        break
    case 6:
        console.log('Friday - prepare for the weekend')
        break
    case 7:
        console.log('Saturday - party')
        break
    default: console.log('The week has only 7 days')
}
