
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
}

let s1=new Student(1,'Mike');
console.log(`Student : ${s1.id} ${s1.name}`);
s1.study();
