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
// 0 + 5 = 5
// 5 + 10 = 15
//15 + 20 =35
















console.log('End');
