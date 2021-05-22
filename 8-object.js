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

//Example
var myHonda ={
  color :'red',
  wheels :4,
  engine :{
    cylinders:4,
    size :2.2
  },
  hp :[300,500,100]
}
console.log(myHonda.engine.size);
console.log(myHonda.hp[0]);//hp index of 0


var car ={
  make :'Honda',
  model :'Civic',
  year:2000,
  color:'Red',
  mileage:75000,
  drive:function(){
    console.log('I am driving Honda');
  }
}

car.drive();
