//For Loop
for(var counter = 1; counter < 5; counter++){
  console.log("Inside the loop : " + counter)
}
console.log('Outside the loop : ' + counter);

//Nested loop
for(var i = 0; i<5; i++){
  console.log("Outer loop at state:" + i);
  for(var p = 0; p<2; p++){
    console.log("Inner loop at state: " + p);
    if(p == 1){
      console.log("\n");
    }
  }
}

//While Loop
var count = 1;
while(count < 5){
  console.log(count);
  count +=2;
}
console.log(count);

//Break
for(var i =i; i<10; i++){
  if(i%3 == 0){
    break;
  }
}
console.log(i);

//Continue
var strat =2;
var sum =0;
do {
  if (strat % 2 ==0) {
    continue;
  }
  sum+=strat;
} while (++strat <=10);
console.log(sum);
