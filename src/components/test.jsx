//promises
let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
  //Part 1: do what you're supposed to do > Cleaning the Room
  let isClean = true;

  //Part2: Either resolve or reject it
  if (isClean) {
    resolve("Clean");
  } else {
    reject("Not Clean");
  }
});

//execute this promise
//then method is fired when the promise is resolved
promiseToCleanTheRoom
  .then(function(fromResolve) {
    console.log("the room is" + fromResolve);
  })
  .catch(function(fromReject) {
    console.log("the room is" + fromResolve);
  });
