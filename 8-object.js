var person = {
  firstNAme :'Mike',
  lastName : 'Smith'
}
console.log(person);
console.log(person.firstNAme);

//If peoperty contains space, place it inside quotes
var address ={
  'building no' : 5645,
  street : 'Jones Branch',
  state : 'VA',
  country : 'USA'
}

console.log(address['building no']);
console.log(address.state);
console.log(address['state']);

//Adding a new property
person.age =30;
console.log(person);

//Delete a property
delete person.age;
console.log(person);

//Checking if property exists
console.log('street' in address);

//Itering over properties of an object
var course ={
  name : 'JS Training',
  url :'www.cybertekschool.com',
  subjects : ['es5','es6','js','ts']
}

for(var key in course){
  console.log(key);
}

for(var key in course){
  console.log(key + " : "+ course[key]);
}
