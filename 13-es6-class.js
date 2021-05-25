
class Car {

}

const honda = new Car();
console.log(honda instanceof Car);

//constructor
class Student{

  constructor(id,name){
    this.id =id;
    this.name=name;
  }
study(){
  console.log(`${this.name} is studying`);
  }

static doHomeWordk(){
  console.log(`${this.name} is doing homework`);
  }

}

let s1=new Student(1,'Mike');
console.log(`Student : ${s1.id} ${s1.name}`);
s1.study();

//Static Variable
Student.age =20;
console.log(Student);

//static
Student.doHomeWordk();
//s1.doHomeWordk();//Not going to work

//Inheritance
class Animal{
  constructor(name){
    this.name=name;
  }
  eat(){
    console.log('Animal is eating');
  }
}

class Dog extends Animal{
  constructor(name,age){
    super(name);
    this.age=4;
  }
eat(){
super.eat();
  console.log('Dog is eating');
}
}

const d = new Dog('Puppy');
console.log(d);
console.log(d.eat());
