//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Enter any number in range 0...59:')

// switch (time) {
//     case time >= 0 && time<=14:
//         console.log('You number from first quarter')
//         break
//     case time >= 15 && time<=29:
//         console.log('You number from second quarter')
//         break
//     case time >= 30 && time<=44:
//         console.log('You number from third quarter')
//         break
//     case time >= 45 && time<=59:
//         console.log('You number from fourth quarter')
//         break
//     default:
//         console.log('Wrong number')
// }

if (time >= 0 && time<=14) {
    console.log('You number from first quarter')
}
else if (time >= 15 && time<=29) {
    console.log('You number from second quarter')
}
else if (time >= 30 && time<=44) {
    console.log('You number from third quarter')
}
else if (time >= 45 && time<=59) {
    console.log('You number from fourth quarter')
}
else console.log('Wrong number')

