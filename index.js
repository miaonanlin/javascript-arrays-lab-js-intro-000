var kittens = ["Milo","Otis","Garfield"]
 //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyAppendKitten(name){
  return kittens.inshift(name)
}

function destructivelyAppendKitten(){
  return kittens.pop()
}

function destructivelyAppendKitten(){
  return kittens.shift()
}

function appendKitten(name){
  return [...kittens, name]
}

function appendKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  return kittens.slice(0,kittens.length-1)
}