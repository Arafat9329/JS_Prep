//Creating array
var scores  = new Array();//empty
var numbers = new Array(10);//array with inital size 10
var myNumber = new Array(9,10,4,5);//array with initial elements

var athletes = Array(3);// array with initaila size 3
var signs = Array('Red');//array with one element

var emptyArray = [];

var colors =['red','green','blue']

//Accesing array elements
var students =['Mike','Tim','Ozzy']
console.log(students);
console.log(students.toString());
console.log(students[0]);

//Basic operations on arrays
students.push('Emma');//.push add at end
console.log(students);

students.unshift('Adam');//.unshift add in beginning
console.log(students);

students.pop();//.pop removes last element
console.log(students);

students.shift();//.shift removes first element
console.log(students);

var index = students.indexOf('Mike');
console.log(index);

students.splice(0,1);//delete [1] element at[0] in array
console.log(students);

// students.push('Arpat');
// console.log(students);
// students.splice(0,2);//delete [2] element strat[0] in array
// console.log(students);

students.splice(2,0,'Matt');// inserts elements
//2 - starting position in the array that new elements will be inserted
//0 - instruct the splice() method to not to delete any array elements
//Third argument, dourth argument, and so on are the new elemnets that are inserted into arrays

console.log(students);

students.splice(0,0,'Matt');
console.log(students);

var array = [1,30,4,21]
console.log(array.sort());//cast elements to string and compares the sgtrings to determine order

var mixArray =["cat","Ant",3,"elephant","Bee",67];
mixArray.sort();
console.log(mixArray);






console.log();
console.log('==========================');
var arr = new Array(1,'1','one');
console.log(arr);
