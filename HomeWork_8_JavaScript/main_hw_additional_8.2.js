//Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }

function Person(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng,
                phone, website, CompanyName, CompanyCatchPhrase, CompanyBs,) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = {street: addressStreet, suite: addressSuite, city: addressCity, zipcode: addressZipcode, geo: {lat: addressGeoLat, lng: addressGeoLng}};
    this.phone = phone;
    this.website = website;
    this.company = {name: CompanyName, catchPhrase: CompanyCatchPhrase, bs: CompanyBs}
}

const person = new  Person(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556',
    'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(person);
console.log('-----------------------');


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результуючого об'єкту
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]
//
//    }

function Tags(titleOfTag, tagAction, ...attributes) {
    this.titleOfTag = titleOfTag;
    this.tagAction = tagAction;
    this.attributes = attributes;
}

function Attribute(titleAttributes, actionAttributes) {
    this.titleAttributes = titleAttributes;
    this.actionAttributes = actionAttributes;
}

const  a = new Tags('a', 'The <a> tag defines a hyperlink, which is used to link from one page to another.',
    new Attribute('href', 'Specifies the URL of the page the link goes to'),
    new Attribute('hreflang', 'Specifies the language of the linked document'),
    new Attribute('target', 'Specifies where to open the linked document')
    )
console.log(a);

const div = new Tags('div', 'The <div> tag defines a division or a section in an HTML document.',
    new Attribute('accesskey', 'Provides a hint for generating a keyboard shortcut for the current element.'),
    new Attribute('class', 'A space-separated list of the classes of the element.')
)
console.log(div);

const h1 = new Tags('h1', 'The <h1> to tags are used to define HTML headings.',
    new Attribute('dir', 'An enumerated attribute indicating the directionality of the element text.'),
    new Attribute('enterkeyhint', 'Hints what action label (or icon) to present for the enter key on virtual keyboards.')
)
console.log(h1);

const span = new Tags('span', 'The <span> tag is an inline container used to mark up a part of a text, or a part of a document.',
    new Attribute('onload', 'Fires after the page is finished loading.'),
    new Attribute('onwheel', 'Fires when the mouse wheel rolls up or down over an element.')
)
console.log(span);

const input = new Tags('input', 'The <input> tag specifies an input field where the user can enter data.',
    new Attribute('alt', 'Specifies an alternate text for images (only for type="image").'),
    new Attribute('autofocus', 'Specifies that an <input> element should automatically get focus when the page loads.'),
    new Attribute('checked', 'Specifies that an <input> element should be pre-selected when the page loads (for type="checkbox" or type="radio")')
)
console.log(input);

const form = new Tags('form', 'The <form> tag is used to create an HTML form for user input.',
    new Attribute('name', 'Specifies the name of a form'),
    new Attribute('method', 'Specifies the HTTP method to use when sending form-data'),
    new Attribute('action', 'Specifies where to send the form-data when a form is submitted')
)
console.log(form);

const option = new Tags('option', 'The <option> tag defines an option in a select list.',
    new Attribute('value', 'Specifies the value to be sent to a server'),
    new Attribute('label', 'Specifies a shorter label for an option')
)
console.log(option);

const select = new Tags('select', 'The <select> element is used to create a drop-down list.',
    new Attribute('size', 'Defines the number of visible options in a drop-down list'),
    new Attribute('multiple', 'Specifies that multiple options can be selected at once')
)
console.log(select);









