function add(a,b){
  console.log('Total is :' + (a+b));
}
add(10,20)

function multiply(a,b){
  return (a*b);
}

console.log(multiply(10,20));

add(4,5);
add(10,20,30);
add(4);

//Function overloading : Not allowed
  // function addTen(a,b){
  //   return (a+10);
  // }
  //
  // function addTen(a,b,){
  //   return(a+b+10);
  // }
  //
  // var x = addTen(10,20);
  // console.log(x);

//Functions are first-class citizens in JS.
  //Yuou can pass function to other functions as arguments
  //You can return functions for other Functions
  //You can store functin in variables

var add2 = add;
add2(100,300);


//Ananymous functions : function without name
var show = function(){
  console.log('This is a function');
}

show();

var divide = function(a,b){
  return a/b;
}

var d= divide(20,10);
console.log(d);

//Passing a functyion to another dunction
function sum(a,b){
  return a+b;
}

function average(a,b,fn){
  return fn(a,b)/2;
}
var res = average(10,20,sum);
console.log(res);

//Example
function cmToIn(length){
  return length/2.54;
}

function inToCm(length){
  return length * 2.54;
}

function convert (fn,length){
  return fn(length);
}

var inches = convert(cmToIn,10);
var cm = convert(inToCm,10);

//Callback functions : A callback is a function passed as an argument to another functions
//A callback function can run afer another function has finished

function myDisplayer(some){
  console.log(some);
}

function myCalculator(num1,num2,myCallBack){
  var sum =num1+num2;
  myDisplayer(sum);
}

myCalculator(5,5,myDisplayer);
