//asynchronously
// console.log('Hello');
//
// setTimeout(function () {
//   console.log('Good bye');
// }, 1000);

// console.log('Hello again');

// let promiseToCleanTheRoom = new Promise(
//   function(resolve,reject){
//   let isClean =false;
//
//   if(isClean){
//     resolve('Room is Clean')//this will be assign to then(try) function parameyter
//   }else {
//     reject('Room is still dirty')//this will be assign to catch function parameyter
//   }
// }
// )
//
// promiseToCleanTheRoom
//     .then(function(fromResolve){
//         console.log('The room is '+fromResolve);
//       })
//     .catch(function(fromReject){
//         console.log('The room is '+fromReject);
//       })

//Now wwe have dependencies

let cleanRoom = function(){
  return new Promise(function(resolve,reject){
    resolve('Romm is clean');
  })
}

let removeGarabage = function(msg){
  return new Promise(function(resolve,reject){
    resolve(msg+' Garbage is removed');
  })
}

let winIceCream = function(msg){
  return new Promise (function (resolve,reject){
    resolve(msg+" You got the iceCream")
  })
}

//cleanRoom();//promise object
cleanRoom().then(function(result){
  return removeGarabage();
}).then(function(result){
  return winIceCream()
}).then(function(result){
  console.log('Finished '+result);
})
