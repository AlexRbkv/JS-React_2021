let obj = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(obj.name);
obj.bool = false;
console.log(obj);
obj.colors = {
    border: 'black',
    bg: 'red'
};

delete obj.bool;

console.log(obj);

for (let item in obj) {
    console.log(item + ": " + obj[item]);
}

console.log(Object.keys(obj));
console.log(Object.keys(obj).length);

let arr = [1,2,3,4,5];
console.log(arr);

arr.pop(); // Удаление последнего элемента
console.log(arr);

arr.push('5'); // Добавление в конец массива
console.log(arr);

arr.shift(); // Удаление первого элемента
console.log(arr);

arr.unshift('1'); // Добавление в начало массива
console.log(arr);

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}

let arr1 = [1,2,3,4,5,6];

arr1.forEach((el,i, mass) => {
    console.log(i + ': ' + el + " | " + mass);
});

let arr2 = [1,3,4,6,7];

for (let key in arr2) { // Выводит индексы элементов
    console.log(key);
}

for (let key of arr2) { // Выводит значения элементов
    console.log(key);
}

let ans = prompt("",""),
    arr3 = [];

arr3 = ans.split(',');
console.log(arr3);

let arr4 = ['11', 'da', 'qqwe', '312'],
    i = arr4.join(', ');
console.log(arr4);
console.log(i);

i = arr4.sort();

function compareNum(a,b) {
    return a-b;
}

let arr5 = [1,56,6,2];
i = arr5.sort(compareNum);

console.log(i);

let soldier = {
    health: 100,
    armor: 100
};

let john = {
    health: 90
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

function User(name, age) {
    this.name = name;
    this.isAdmin = false;
    this.age = age;
}

let user = new User('Джон', 20);
let user2 = new User('Джим', 21);
console.log(user);
console.log(user2);