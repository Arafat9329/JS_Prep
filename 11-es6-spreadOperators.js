let mid =[3,4];
let arr =[1,2,...mid,5,6];//...=>2,3
console.log(arr);


let str ='Hello';
var chars =[...str];//[ 'H', 'e', 'l', 'l', 'o' ]
console.log(chars);

//Rest operators collects all elements into array
function func(...theArgs){
  console.log(theArgs.length);
}
func();
func(5);
func(5,6,7);

function multiply(multiply,...theArgs){
  return theArgs.map(element => multiply * element);
}

let arry = multiply(2,15,25,42);
console.log(arry);
