var a,b

console.log(a)
console.log(b);

//hoistring

if(true){
  var b = 2
  a = 1
  console.log(b)
}
console.log(a)
console.log(b)

function a1(fn){
  var a = 5
//  console.log(a)
//  console.log(b)
console.log(`a = ${a}`);
console.log(typeof fn);



  if(true){
    var b = 2
    console.log(b)
  }

}


function b1() {
  var b = 1
  console.log(`b = ${b}`);

}

a1(b1)
//console.log(a);
