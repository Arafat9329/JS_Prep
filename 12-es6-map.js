let map = new Map();

map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map.size);

console.log(map.get(1));

//Map can use objects as keys
let students={name:'Mike',age:20};
let visits = new Map();
visits.set(students,100);

//Map can use functions as keys
let fun = function(){console.log('Hello');};
visits.set(fun,'This is function');
console.log(visits.get(fun));

//Chaining
let myCars = new Map();
myCars.set(1,'HondaCivic')
      .set(2,"HondaAccord")
      .set(3,'HondaCRV');
console.log(myCars.get(2));

//iteration - over keys
for(let car of myCars.keys()){
  console.log(car);
}

//iteration - over values
for(let value of myCars){
  console.log(value);
}
for(let[key,value]of myCars){
  console.log([key+"="+value]);
}

myCars.forEach((value,key)=>{console.log(key +" : "+value);})
