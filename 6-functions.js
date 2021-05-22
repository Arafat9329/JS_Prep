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
