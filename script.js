console.log(Object.getOwnPropertyNames(Array.prototype));
let arr = ['Olma', 'piyoz','Banan', 'Pomidor']
let arrr = ['Moshina', 'Stul']

// console.log(arr.length); // length Определяет сколько массивов в переменной

// console.log(arr.constructor()); // constructor Создает новый обьект Function

// console.log(Array.prototype.at(arr)) // at() Возвращает элемент массива с данным индексом

// console.log(arr.concat(arrr)); //concat() объединяет текст из двух или более строк и возвращает новую строку.

//  console.log(arr.copyWithin(1,2));// copyWithin Убирает выбранный массив и копирует всместо него указанный массив


// // arr.fill('Olma') // Обьязательно
// console.log(arr); //fill() заполняет часть или все элементы массива одним и тем же значением


//  const lor = arr.find(arr => arr == 'Olma')
// console.log(lor); // find() определить первый элемент массива, отвечающий заданному критерию.


// console.log(arr.findIndex); // findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции




// const arraa = arr.findLast((element) => element.length > 3)
// console.log(arraa); //findLast() обходит массив, начиная от последнего элемента, и возвращает значение элемента подходящего по условию переданной функции





// const elementIndex = arr.findLastIndex((element) => element > 'Banan')

// console.log(elementIndex); //findLastIndex() обходит массив, начиная с конца, и возвращает индекс первого элемента, который удовлетворяет условию переданной функции


// console.log(arr.pop()); // pop() удаляет последний элемент из массива и возвращает его значение либо же выводит его



// // let lol = arr.push("Shaftoli", "Meva");
// // console.log(arr);  ['Olma', 'Banan', 'Pomidor', 'Shaftoli', 'Meva']
// // console.log(lol); // push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

// console.log(arr.reverse()); //  reverse() возвращает массив в обратном порядке


// console.log(arr.shift()); //  shift() удаляет первый элемент из массива и возвращает его значение


// //console.log(arr.unshift(1)); // unshift вставляет переданные значения в начало массивоподобного объекта.


// console.log(arr.slice(1));// ['Banan', 'Olma']   // slice() извлекает текст из одной строки и возвращает новую строку 


// let sym = ['a', 'b', 'c', 'd']
// console.log(sym.sort()); // sort производит сортировку массива в лексикографическом порядке и возвращает уже измененный массив

// console.log(arr.includes(1)); // true   //  includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false

// console.log(arr.indexOf(1));// -1 // indexOf() возвращает индекс первого вхождения данной подстроки в строке.



// console.log(arr.join()); // join() объединяет элементы массива в строку и возвращает строку


// console.log(Object.keys(arr));// keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте.




// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   } // entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value] , в том же порядке, что и в цикле for...in


//   var obj = { 0: "a", 1: "b", 2: "c" };
//   console.log(Object.values(obj)); // ['a', 'b', 'c']
//    // values() возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте




// sym.forEach((element) => console.log(element));
// //  forEach() выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания




// const result = arr.filter((ar) => ar.length > 4);
// console.log(result); // Примененный к содержимому массива, filter() не вносит изменений в исходный объект.



// let arr2 = ['Olma', 'piyoz',['Banan', 'Pomidor']]
// console.log(arr2.flat()); // flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth


let ar1 = [1, 2, 3, 4];
// ar1.map((x) => [x * 2]); // [[2], [4], [6], [8]]
 // flatMap() позволяет сформировать массив, применяя функцию к каждому элементу, затем уменьшает вложенность, делая этот массив плоским, и возвращает его


// const numbers = [1, 4, 9];
// const roots = numbers.map(Math.sqrt);
// // теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]
 //Map — это коллекция пар ключ/значение, которая может использовать любой тип данных в качестве ключа и поддерживает порядок своих записей



// function isBigEnough(element, index, array) {
//     return element >= 10;
//   }
//   [12, 5, 8, 130, 44].every(isBigEnough); // false
//   [12, 54, 18, 130, 44].every(isBigEnough); // true
  
 // every() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт ложное значение



//  const even = (element) => element % 2 === 0;

// console.log(ar1.some(even));// some() вызывает переданную функцию callback один раз для каждого элемента, присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт истинное значение




// const initialValue = 0;
// const sumWithInitial = ar1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
//  reduce js последовательно выполняет функцию на всех элементах массива, возвращая одно конечное значение




// ar1.reduceRight(function (previousValue, currentValue, index, array) {
//     if (0 == 0) {
//         console.log('Hello');
//     }
//   });
// reduceRight типичная операция в функциональном программировании, где она известна также под названием «свертка»



// const ars = arr.toReversed()
// console.log(ars);
//  toReversed() возвращает новый массив, в котором порядок всех элементов будет противоположен порядку в исходном массиве



// const arus = arr.toSpliced(1, 2)

// console.log(arus)
// toSpliced() Возвращает новый массив, созданный из исходного, удаляя и/или добавляя новые элементы


// let a = 5;
// let obj = {
//   a: 10
// };

// with(obj) {
//     alert( a ); // 10, из obj
//   }

 // with позволяет использовать в качестве области видимости для переменных произвольный объект



//  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));
// console.log(event.toLocaleString('ko-KR', { timeZone: 'UTC' }));
 //  toLocaleString() экземпляров Date возвращает строку, содержащую зависимое от языка представление этой даты в локальном часовом поясе




    // console.log(arr.toString());
 // toString() возвращает строку, представляющую объект в определённой системе счисления