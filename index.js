var kittens = ["Milo","Otis","Garfield"]
 //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push;
}

function destructivelyAppendKitten(name){
  return kittens.unshift(name);
}

function destructivelyAppendKitten(){
  return kittens.pop();
}

function destructivelyAppendKitten(){
  return kittens.shift();
}

function appendKitten(name){
  return [...kittens, name];
}

function appendKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1);
}

function removeFirstKitten(){
  kittens.slice(1)
  return kittens
}
