// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

console.log('1----------------1')

function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email
    this.phone = phone;
}

let Users = [
    new  User(1, 'Olha', 'Ruda', 'ruda@gmail.com', '098 225 33 69'),
    new  User(2, 'Alina', 'Nehoda', 'nehoda@gmail.com', '098 224 33 35'),
    new  User(3, 'Oksana', 'Bila', 'bila@gmail.com', '096 245 98 02'),
    new  User(4, 'Ivanka', 'Pinchuk', 'pinchuk@gmail.com', '097 536 98 10'),
    new  User(5, 'Stepan', 'Stepanchuk', 'stepanchuk@gmail.com', '093 682 15 02'),
    new  User(6, 'Oleh', 'Juice', 'juise@gmail.com', '095 410 25 73'),
    new  User(7, 'Ivan', 'Timchuk', 'timchuk@gmail.com', '063 523 55 78'),
    new  User(8, 'Taras', 'Pirog', 'pirog@gmail.com', '098 789 20 45'),
    new  User(9, 'Bohdan', 'Baida', 'baida@gmail.com', '0963 221 55 89'),
    new  User(10, 'Lilia', 'Jonsonuk', 'jonsonuk@gmail.com', '098 556 70 03'),
]

console.log(Users);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('2----------------2')

let evenUsers = Users.filter((user) => user.id % 2 === 0)
console.log(evenUsers);


// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('3----------------3')

let sortUsers = Users.sort((a, b) => a.id - b.id)
console.log(sortUsers);


// створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log('4----------------4')

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email
        this.phone = phone;
        this.order = order;
    }
}

let Clients = [
    new  Client(1, 'Olha', 'Ruda', 'ruda@gmail.com', '098 225 33 69', ['milk', 'potato']),
    new  Client(2, 'Alina', 'Nehoda', 'nehoda@gmail.com', '098 224 33 35', ['cucumber']),
    new  Client(3, 'Oksana', 'Bila', 'bila@gmail.com', '096 245 98 02', ['salad', 'bins', 'onion']),
    new  Client(4, 'Ivanka', 'Pinchuk', 'pinchuk@gmail.com', '097 536 98 10', ['red', 'hot', 'chili', 'peppers']),
    new  Client(5, 'Stepan', 'Stepanchuk', 'stepanchuk@gmail.com', '093 682 15 02', ['tomato']),
    new  Client(6, 'Oleh', 'Juice', 'juise@gmail.com', '095 410 25 73', ['juice', 'tomato']),
    new  Client(7, 'Ivan', 'Timchuk', 'timchuk@gmail.com', '063 523 55 78', ['banana']),
    new  Client(8, 'Taras', 'Pirog', 'pirog@gmail.com', '098 789 20 45', ['ketchup', 'cheese']),
    new  Client(9, 'Bohdan', 'Baida', 'baida@gmail.com', '0963 221 55 89', ['coffee']),
    new  Client(10, 'Lilia', 'Jonsonuk', 'jonsonuk@gmail.com', '098 556 70 03', ['milk', 'cheese']),
]

console.log(Clients);


// Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('5----------------5')

console.log(Clients.sort((a, b) => a.order.length - b.order.length))


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('5----------------5')

function Car (model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engineVolume - ${this.engineVolume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        newSpeed += this.maxSpeed
        console.log(`Now max speed is ${newSpeed}`)
    }
    this.changeYear = function (newValue) {
        this.year = newValue
        console.log(`Now the year of production is ${this.year}`)
    }
    this.addDriver = function (driver) {
        this.driver = driver
    }
}

let car1 = new Car('s90', 'Volvo', '2020', 200, 2.5)
console.log(car1);
car1.drive();
car1.info()
car1.increaseMaxSpeed(50)
car1.changeYear('2022')
car1.addDriver({name: 'Stepan', surname: 'Stepanchuk'})
console.log(car1.driver)


// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// changeYear (newValue) - змінює рік випуску на значення newValue
// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('6----------------6')

class MotorCar {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info () {
        console.log(`model - ${this.model}, producer - ${this.producer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, engineVolume - ${this.engineVolume}`)
    }
    increaseMaxSpeed (newSpeed) {
        newSpeed += this.maxSpeed
        console.log(`Now max speed is ${newSpeed}`)
    }
    changeYear (newValue) {
        this.year = newValue
        console.log(`Now the year of production is ${this.year}`)
    }
    addDriver (driver) {
        this.driver = driver
    }
}

let car2 = new  MotorCar('camry', 'toyota', '2021', 220, 2)
console.log(car2);
car2.drive();
car2.info()
car2.increaseMaxSpeed(25)
car2.changeYear('2023')
car2.addDriver({name: 'Ivanka', surname: 'Pinchuk'})
console.log(car2.driver)


// створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
console.log('6----------------6')

function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let Cinderellas = [
    new  Cinderella('Olena', 21, 36),
    new  Cinderella('Svitlana', 19, 36.5),
    new  Cinderella('Alina', 15, 33),
    new  Cinderella('Oksana', 18, 34),
    new  Cinderella('Olha', 25, 37),
    new  Cinderella('Nina', 17, 41),
    new  Cinderella('Tanya', 27, 42),
    new  Cinderella('Halina', 29, 40),
    new  Cinderella('Ivanka', 22, 35),
    new  Cinderella('Anna', 20, 38),
]

console.log(Cinderellas);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
console.log('7----------------7')

class Prince {
    constructor(name, age, foundFootSize) {
        this.name = name;
        this.age = age;
        this.foundFootSize = foundFootSize;
    }
}

let prince = new  Prince('Bohdan', 30, 37)
console.log(prince);


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log('7----------------7')

for (const cinderella of Cinderellas) {
    if (cinderella.footSize === prince.foundFootSize) {
        console.log(`Cinderella ${cinderella.name} should be with prince ${prince.name}`)
    }
}


// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('8----------------8')

console.log(Cinderellas.find((cinderella) => cinderella.footSize === prince.foundFootSize));



