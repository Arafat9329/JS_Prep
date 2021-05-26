//asynchronously
// console.log('Hello');
//
// setTimeout(function () {
//   console.log('Good bye');
// }, 1000);

// console.log('Hello again');

let promiseToCleanTheRoom = new Promise(
  function(resolve,reject){
  let isClean =false;

  if(isClean){
    resolve('Room is Clean')
  }else {
    reject('Room is still dirty')
  }
}
)

promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The room is '+fromResolve);
}).catch(function(fromReject){
  console.log('The room is '+fromReject);
})
