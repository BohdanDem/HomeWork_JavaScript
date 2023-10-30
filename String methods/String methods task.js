// XX00 долл/рік відкладати на протязі XX років під X% річних
let amount = 0;
const yearDeposit = 2400
const yearIncrease = 1.09
const years = 25

for (let i = 1; i <= years; i++) {
    amount = (amount + yearDeposit) * yearIncrease
}
console.log(amount);


console.log(21); //------------------------------------------
let rob = "Robin Singh"
console.log(rob.split(" "));


console.log(22); //------------------------------------------
//Write a JavaScript function to extract a specified number of characters from a string
const returnStr = (string, numbOfLetters) => {
    console.log(string.slice(0, numbOfLetters));
}
returnStr(rob, 4)


console.log(23); //------------------------------------------
//Write a JavaScript function to convert a string into abbreviated form
const convertStr = (string) => {
    const index = string.indexOf(" ")
    console.log(string.slice(0, index + 2));
}
convertStr(rob)


console.log(24); //------------------------------------------
//Write a JavaScript function to parameterize a string
const tas24 = "Robin Singh from USA."
const parameterize  = (string) => {
    console.log(string.toLowerCase().replace(".", "").replaceAll(" ", "-"))
    //console.log(string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-"))
}
parameterize (tas24)


console.log(25); //------------------------------------------
//Write a JavaScript function to capitalize the first letter of a string
const capital = 'js string exercises'
const capitalFirstLetter  = (string) => {
    console.log(string[0].toUpperCase() + string.substring(1));
}
capitalFirstLetter (capital)


console.log(26); //------------------------------------------
//Write a JavaScript function to capitalize the first letter of each word in a string.
const capitalFirstLetterEachWord  = (string) => {
    let words = string.split(" ")
    let outPut = ''
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        outPut = `${outPut} ${word[0].toUpperCase() + word.substring(1)}`
    }
    console.log(outPut.trim());
}
capitalFirstLetterEachWord(capital)

function capitalize_Words(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
console.log(capitalize_Words('js string exercises'));


console.log(27); //------------------------------------------
//Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
let caseLetter = 'AaBbc'
swapcase = function swapcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swapcase(caseLetter));


console.log(28); //------------------------------------------
//Write a JavaScript function to convert a string into camel case
let camelizeStr1 = "JavaScript Exercises";
let camelizeStr2 = "JavaScript exercises ";
let camelizeStr3 = "JavaScriptExercises";

const camelize = (string) => {
    let words = string.split(" ")
    let outPut = ''
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        outPut = `${outPut}${word[0].toUpperCase() + word.substring(1)}`
    }
    console.log(outPut.trim());
}

camelize2 = function camelize(str) {
    console.log(str.replace(/\W+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    }));
}

camelize(camelizeStr1)
camelize2(camelizeStr2)
camelize(camelizeStr3)


console.log(29); //------------------------------------------
//Write a JavaScript function to concatenate a given string n times (default is 1)
const concat = 'Ha!'
const concatenate = (string, n = 1) => {
    console.log(string.repeat(n))
}

concatenate(concat, 3)


console.log(30); //------------------------------------------
//Write a JavaScript function to insert a string within a string at a particular position (default is 1).
const test = 'We are doing some exercises.'
const insertString = 'JavaScript '
const insert = (string, insertStr = '', position = 0) => {
    let part1 = string.substring(0, position).trim()
    let part2 = string.substring(position)
    let newStr = `${part1} ${insertStr.trim()} ${part2}`
    console.log(newStr.trim())
}

const insert2 = (string, insertStr = '', position = 0) => {
    console.log(string.slice(0, position) + insertStr + string.slice(position))
}

insert(test, insertString, 18)
insert2(test, insertString, 18)






























