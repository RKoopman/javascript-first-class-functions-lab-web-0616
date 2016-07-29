function countdown(callback){
  return window.setTimeout(callback)
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function createMultiplier(multiple){
  return function (total){
    return multiple * total;
  };
}

function multiplier(a, b){
  return a * b
}


//
// function receivesAFunction(callback){
//   callback()
// }
//
// function returnsANamedFunction(){
//   return fn = function thingy() {}
// }
//
// function returnsAnAnonymousFunction(){
//   return function() {}
// }
