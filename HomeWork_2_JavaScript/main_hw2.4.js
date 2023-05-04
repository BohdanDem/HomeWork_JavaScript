//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Enter the number of day in range 1...31:')

if (day >= 1 && day<=10) {
    console.log('You day related to first decade')
}
else if (day >= 11 && day<=20) {
    console.log('You day related to second decade')
}
else if (day >= 21 && day<=31) {
    console.log('You day related to third decade')
}
else console.log('Wrong number')

