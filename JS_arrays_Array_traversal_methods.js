// 1. Дан масив ['test', false, 12345, undefined, 'secret', NaN,true, 0, 100, null ] Залогувати в консолі кожен елемент масиву з непарним індексом
let arr = ['test', false, 12345, undefined, 'secret', NaN, true, 0, 100, null];

for(let i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
        console.log(arr[i]);
    }
}

// 2. Дан наступний масив ['test', false, 2345, null]
let arr = ['test', false, 2345, null];

const dataArr = arr.map(function(currentValue, index, array) {
    return 'Item with index' + ' ' + currentValue + ' '+ 'has value' + ' ' + index;
});

console.log(dataArr);

// 3. Дан масив, який складається з наступних об'єктів
const user = [
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];

const data = user.filter(function (userAge){
    return userAge.age >= 18;
});

console.log(data);

// 4. Використовуючи початковий масив з завдання 3 знайти індекс першої жінки у массиві
const user = [
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];

const data = user.findIndex(function(index) {
    return index.gender === 'female';
});

console.log(data);

// 5. Використовуючи початковий масив з завдання 3 перевірити чи всі користувачі в ньому є повнолітніми чоловіками
const user = [
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];

const data = user.every(function(user) {
    return user.gender === 'male' && user.age > 18;
});

console.log(data);