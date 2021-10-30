
function showFirstFunc(a,b) {  //function declaration
    return a + b;
}

let culcPlus = function showFirstFuncExpr(a,b) { //function expression
    return a + b;
};

let culcPlus2 = (a,b) => a + b; //arrow function

console.log(showFirstFunc(1,4));
console.log(culcPlus(1,5));
console.log(culcPlus2(1,6));

function showFuncRes(a,b) {
    let c = a + b;
}

let sFR = showFuncRes(1,2);
console.log(sFR); // undefined

let fRes = function (a,b) {
    let c = a + b;
};

let c = 3;
function decTree () {
    return c;
}

let d = decTree();
console.log(d); // 3

console.log(fRes); //объект(функция) fRes

let val = 7;
function createAdder() {
    function addNumbers(a, b) {
        let ret = a + b;
        return ret;
    }
    return addNumbers;
}
let adder = createAdder();
let sum = adder(val, 8);
console.log(adder); // Function addNumbers
console.log('example of function returning a function: ', sum);

let str = 'test';
/* свойство */
console.log(str.length); // 4 
console.log(str[3]); // t
console.log(str[10]); // undefined
console.log(str.charAt(3)); // t
console.log(str.charAt(10)); // пустая строка

/* метод */
console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test
console.log(str.indexOf('e')); // 1
console.log(str.lastIndexOf('e')); // 1

for (let char of str) {
    console.log(char);
}

console.log(Math.round(12.2)); // 12;
console.log(Math.round(12.5)); // 13;
console.log(Math.round(12.8)); // 13;

let twelve = '12.2px';
console.log(parseInt(twelve)); // 12;
console.log(parseFloat(twelve)); //12.2

function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
console.log(increment);
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

let cc = 4;
function addX(x) {
  return function(n) {
      console.log(n,'n');
      console.log(x,'x');
     return n + x;
  };
}
const addThree = addX(3);
let dd = addThree(cc);
console.log('example partial application', dd);


let name1 = 'Джон';
let age1 = 18;
function myTag(string, person, age) {
    let s1 = string[0];
    let s2 = string[2];

    if (age => 18) {
        let old = 'совершеннолетний';
    } else {
        let old = 'несовершеннолетний';

    }
    return `${s1}${person} ${age}${s2}`;
}
console.log(myTag`Это ${name1} d ${age1} лет`);

let guestList = "Guests:\n * John\n * Pete\n * Mary\u{1F60D}";
console.log(guestList); // список гостей, состоящий из нескольких строк

console.log(~2); // -3  -(n + 1)
console.log(~1); // -2
console.log(~0); // -1
console.log(~-1); // 0
console.log(~[]); // -1
console.log(~''); // -1
console.log(~'1'); // -2