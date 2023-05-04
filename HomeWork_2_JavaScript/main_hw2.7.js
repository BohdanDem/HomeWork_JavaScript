//є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let x = prompt('Enter any data:')
// let x = false
// let x = ''
// let x = ""
// let x = ``
// let x = null
// let x = undefined
// let x = 0
// let x = -0
// let x = 0n

if (x === false || x === '' || x === "" || x === `` || x === null || x === undefined || x === 0 || x === -0 || x === 0n) {
    console.log('default value')
}
else console.log(x)
