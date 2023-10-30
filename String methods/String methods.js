//const a = new String

let firstString = "Okten is the best place to learn"
let secondString = "frontend and backend development"
let thirdString = "  frontend and backend  "


// charAt() -------- повертає символ на вказаному індексі
console.log(1, firstString.charAt(4))


// charCodeAt() -------- повертає значення юнікоду на вказаному індексі
console.log(2, firstString.charCodeAt(1))


// concat() -------- з'єднує дві і більше стрічки та повертає їх
console.log(3, firstString.concat(secondString, thirdString))


// endsWith() -------- перевіряє чи стрічка завершується на вказаний знак чи стрічку, повертає булеве значення
console.log(4, firstString.endsWith("learn"))


// fromCharCode() -------- перетворює значення юнікоду на символ, виконує пошук по ньому і повертає
console.log(5, String.fromCharCode(114))


// includes() -------- перевіряє чи стрічка має певний символ чи стрічку, повертає булеве значення
console.log(6, firstString.includes("best"))


// indexOf() -------- повертає позицію першого знайденого елемента
console.log(7, firstString.indexOf("best"))


// lastIndexOf() -------- повертає позицію останнього знайденого елемента
console.log(8, secondString.lastIndexOf("end"))


// match() -------- шукає співпадіння в стрічці з регулярним виразом і повертає масив результатів пошуку
console.log(9, secondString.match(/end/g))


// repeat() -------- повертає нову стрічку з вказаною кількістю копій існуючої стрічки
console.log(10, firstString.repeat(3))


// replace() -------- шукає в стрічці вказане значення і повертає нову стрічку з заміненим значенням
console.log(11, secondString.replace(/end/g, "END"))


// search() -------- шукає в стрічці вказане значення і повертає його індекс
console.log(12, secondString.search("end"))


// slice() -------- вирізає кусок стрічки і повертає його, перший індекс - початок, другий - кінець (не входить)
console.log(13, secondString.slice(2, 5))


// split() -------- розділяє стрічку на підстрічки, використовуючи вказаний роздільник і повертає їх як масив
console.log(14, secondString.split(" "))


// startsWith() -------- перевіряє чи стрічка починається на вказаний знак чи стрічку, повертає булеве значення
console.log(15, firstString.startsWith("learn"))


// substr() -------- вирізає кусок стрічки і повертає його, перший індекс - початок, другий - кількість символів
console.log(16, secondString.substr(2, 5))


// substring() -------- вирізає кусок стрічки і повертає його, перший індекс - початок, другий - кінець (не входить)
console.log(17, secondString.substring(2, 5))


// toLowerCase() -------- перетворює всі алфавітні символи в нижній регістр і повертає стрічку
console.log(18, firstString.toLowerCase())


// toUpperCase() -------- перетворює всі алфавітні символи в верхній регістр і повертає стрічку
console.log(19, firstString.toUpperCase())


// trim() -------- видаляє всі пробіли на початку та в кінці стрічки
console.log(20, thirdString.trim())















