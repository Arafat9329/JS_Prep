//es5
let x1 =function(a){
  return a;
}
//es6
let x2 = a=>a;

//if we do not have any parameters

let y1 =function(){
  console.log('hello');
}
let y2 = () => {console.log('hello');}

// if we have multiple parameters
let z =(a,b,c)=>a+b+c;

//multiline arrow function
let sum =(a,b) =>{
  let result =a+b;
  return result;
}

let total = arr =>arr.reduce(((a,b) => a+b),5.5);
let arr =[5,10,20];
console.log(total(arr));
// 5.5 + 5 = 10.5
// 10.5 + 10 = 20.5
//205.5 + 20 =40.5

//map()method : creates a new array with the results of calling a provided function
//on every element in the calling array

const map1 = arr.map(x => x*2);
console.log(map1);

//for..of : creates a loop iterating over iterable objects

let myFruites = ['Apple','Orange','Banan'];
for(let value of myFruites){
  console.log(value);
}

















console.log('End');
