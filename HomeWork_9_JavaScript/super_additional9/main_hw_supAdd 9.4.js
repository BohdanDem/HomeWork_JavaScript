// З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

console.log('1---------------1')

let address = []
for (const user of users) {
    address.push(user.address)
}
console.log(address);


// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

document.write('2---------------2')

for (const user of users) {
    let userinfo = document.createElement('div')
    userinfo.classList.add('user')
    userinfo.innerText = `
    Name - ${user.name}
    Age - ${user.age}
    Status - ${user.status}
    Address: City - ${user.address.city}, Country - ${user.address.country}, Street - ${user.address.street}, HouseNumber - ${user.address.houseNumber}.
    `
    document.body.appendChild(userinfo)
}


// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

document.write('3---------------3')

for (const user of users) {
    let userinfo = document.createElement('div')
    userinfo.classList.add('user')
    userinfo.style.margin = '20px 0'

    let name = document.createElement('div')
    name.classList.add('name')
    name.innerText = `Name - ${user.name}`

    let age = document.createElement('div')
    age.classList.add('age')
    age.innerText = `Age - ${user.age}`

    let status = document.createElement('div')
    status.classList.add('status')
    status.innerText = `Status - ${user.status}`

    let address = document.createElement('div')
    address.classList.add('address')
    address.innerText = `Address: City - ${user.address.city}, Country - ${user.address.country}, Street - ${user.address.street}, HouseNumber - ${user.address.houseNumber}.`

    userinfo.append(name, age, status, address)
    document.body.appendChild(userinfo)
}


// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості
// по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

document.write('4---------------4')

for (const user of users) {
    let userinfo = document.createElement('div')
    userinfo.classList.add('user')
    userinfo.style.margin = '20px 0'

    let name = document.createElement('div')
    name.classList.add('name')
    name.innerText = `Name - ${user.name}`

    let age = document.createElement('div')
    age.classList.add('age')
    age.innerText = `Age - ${user.age}`

    let status = document.createElement('div')
    status.classList.add('status')
    status.innerText = `Status - ${user.status}`

    let address = document.createElement('div')
    address.classList.add('address')
    address.style.marginLeft = '20px'

    let city = document.createElement('div')
    city.classList.add('city')
    city.innerText = `City - ${user.address.city}`

    let country = document.createElement('div')
    country.classList.add('country')
    country.innerText = `Country - ${user.address.country}`

    let street = document.createElement('div')
    street.classList.add('street')
    street.innerText = `Street - ${user.address.street}`

    let houseNumber = document.createElement('div')
    houseNumber.classList.add('houseNumber')
    houseNumber.innerText = `HouseNumber - ${user.address.houseNumber}`

    address.append(city, country, street, houseNumber)
    userinfo.append(name, age, status, address)
    document.body.appendChild(userinfo)
}



