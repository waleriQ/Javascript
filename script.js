//****slice*****
//arr.slice([start], [end])
// let arr = ["t", "e", "s", "t"];
// let brr = arr.slice(0,1);
// console.log(brr);

// CREATE COPY
// let arr = ["t", "e", "s", "t"];
// let brr = arr.slice();
// console.log(brr);

//****concat*****
// let a = [1,2,3,4,5];
// let b = ['BMW', 'Mercedes', 'Audi'];
// a.splice(5, 0, 'BMW', 'Mercedes', 'Audi');
// console.log(a);

// *** ***

// ***Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе***
// let first = [1, 2, 3];
// let second =  [4, 5, 6];
// let result = first.concat(second);
// console.log(result)

// *** Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. ***
// let first = [1, 2, 3];
// let result = first.reverse();
// console.log(result);

// *** Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6. ***
// let first = [1, 2, 3];
// first.push(4,5,6);
// console.log(first); //НЕ СОЗДАЕТ НОВЫЙ МАССИВ А ВОЗВРАЩАЕТ ЭТОТ

// *** Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. ***
// let first = [1, 2, 3];
// first.unshift(4,5,6);
// console.log(first); //НЕ СОЗДАЕТ НОВЫЙ МАССИВ А ВОЗВРАЩАЕТ ЭТОТ

// *** Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент. ***
// let first = ['js', 'css', 'jq'];
// first.shift();
// console.log(first); //НЕ СОЗДАЕТ НОВЫЙ МАССИВ А ВОЗВРАЩАЕТ ЭТОТ

// *** Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент. ***
// let first = ['js', 'css', 'jq'];
// first.pop();
// console.log(first); //НЕ СОЗДАЕТ НОВЫЙ МАССИВ А ВОЗВРАЩАЕТ ЭТОТ

// *** Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]. ***
// let first = [1, 2, 3, 4, 5];
// let result = first.slice(0,3);
// console.log(result);
// console.log(first);

// ***  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. ***
// let first = [1, 2, 3, 4, 5];
// let res = first.slice(3,5);
// console.log(res);

// *** ***

// *** Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. ***

// let first = [1, 2, 3, 4, 5];
// first.splice(1, 2);
// console.log(first);
//
// let second = [1, 2, 3, 4, 5];
// let res = second.splice(1, 2);
// console.log(res); // ??????????

// ***  Дан массив [4, 5, 6, 7, 8]. С помощью метода splice запишите в новый массив элементы [1,2,3]. ***
// let first = [4, 5, 6, 7, 8];
// first.splice(0,0, 1,2,3);
// console.log(first);

// *** Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. ***
// let first = [1, 2, 3, 4, 5];
// first.splice(3, 0, 'a', 'b', 'c');
// console.log(first);

// ***  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. ***
// let first = [1, 2, 3, 4, 5];
// first.splice(1,0,'a', 'b');
// first.splice(6, 0, 'c' );
// first.splice(8, 0, 'e' );
// console.log(first);

// *** Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. ***
// let first = [3, 4, 1, 2, 7,100,200,300];
// first.sort();
// console.log(first)
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
// let arr = [2, 6, 67, 4, 20];
// let res = arr.map(function(elem){
// return Math.sqrt (elem)
// });
// console.log(res);
// / let numbers = [1,3,5,7];
// let res = numbers.map(arg => arg*2);
// console.log(res)

//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// let arr = ['audi', 'mersedes', 'lambo'];
// let res = arr.map(item => item + '!');
// console.log (res);

//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
// let arr = [2, 6, 67, 4, 20];
// let res = arr.map(function(elem){
// return Math.sqrt (elem)
// });
// console.log(res);

// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

// const arr = ['BMW', 'Lada', 'Skoda'];
// let res = arr.map(function(item) {
// return arr.split('').reverse().join('');
// });
// console.log(res);

// const arr = ['BMW', 'Lada', 'Skoda'];
// let res = arr.toString().reverse.join('');
// console.log(res);

//---CYCLE----

//Задача. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 11;
// if (a == 10) {
//     console.log('Верно');
// }
// else {
//     console.log('Неверно');
// }

//Задача
// Задача. В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает это число
// (в первую, вторую, третью или четвертую).

// let min = 10;
// if (min >= 0 && min <= 14) {
//     alert('В первую четверть.');
// }
// if (min >= 15 && min <= 30) {
//     alert('Во вторую четверть.');
// }
// if (min >= 31 && min <= 45) {
//     alert('В третью четверть.');
// }
// if (min >= 46 && min <= 59) {
//     alert('В четвертую четверть.');
// }


