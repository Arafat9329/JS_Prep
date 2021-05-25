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
