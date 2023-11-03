
let array = [1, 2, 3, 4, 5, 6]; //массив, можно использовать массив объектов
let size = 2; //размер подмассива
let subarray = []; //массив в который будет выведен результат.
for (let i = 0; i <Math.ceil(array.length/size); i++){
    subarray[i] = array.slice((i*size), (i*size) + size);
}
console.log(subarray);

const students1 = ['Иванов', 'Сидоров'];
const students2 = ['Петров', 'Курочкина'];

const all_1 = students1.concat(students2);
const all_2 = [].concat(students1,students2);  

console.log(all_1)


let str = 'Hello Wofwvc fcd 0 rld!';
let position = str.indexOf('0');
console.log('номер позиции нуля:' + position); // Output: 6

//for (let i = 1; i <= 1000; i++) {
//	let str = String(i); // преобразуем число в строку
	
//	if (str[i] + s) {
//		console.log(i);
//	}
//}

var num = prompt("Введите число", "5");
var arr 
var tbl = {}

for (var i = 0; i < 1000; i++)
  tbl[i ]= (i in tbl) ? arr[i] + 1 : 1;

for (var v in tbl)
  if ((tbl[num - v] in tbl) && ((v < num - v) || ((v == num - v) && (tbl[v] > 1))))
      console.log("Ваша пара чисел: " + v + " + " + (num - v));

      let ret=[1,2,3,4,5,6]
      let summ=ret[1]+ret[2]+ret[0]
      console.log('Ваша сумма:' + summ)

      let arr = [1,2,4,-1,7,11,76, -2,];
let arr1 = [];

for (elem of arr) {
    if (elem > 0) {
        arr1.push(elem);
    }
}
console.log(arr1)

let str = '2025-12-31';
let arr = str.split('-');
console.log('day' ,arr[2] + ,'\n', +'month' ,arr[1]+,'\n', + 'year' ,arr[0]);

let eelem1 = String(document.querySelector('#elem1'));
let eelem2 = document.querySelector('elem2');
let eelem3 = document.querySelector('elem3');
console.log(eelem1);
console.log(eelem2);
console.log(eelem3);

const testId = document.getElementById('#elem1');
console.log(testId);

const a=['12,34,56']
var n = eval(a.join('+'));
console.log(n);



var str = "asdf1";
var search = str.search(/\d/)
console.log(search);

var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0}
var result = Object.entries(obj);

console.log(result);

const alternativeCase = s => s.replace(/(\S\s*)(\S?)/g, (m, a, b) => a.toUpperCase() + b.toLowerCase());

console.log( alternativeCase('abcde') )

const text = 'Я так люблю программировать';
 
function getUpper(str) {
  return str.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}
console.log(getUpper(text));

var str = "023m0df0dfg0";
var indices = [];
for(var i=0; i<str.length;i++) {
    if (str[i] === "0") indices.push(i);
}
console.log (indices)