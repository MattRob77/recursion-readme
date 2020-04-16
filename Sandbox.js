//Recursive functions are functions that call themselves.
function sayDownFrom(n) {
  console.log(n)
  if(n > 1) {
    sayDownFrom(n -1) //recursive call
  } else {
    return true //base case
  }
}

sayDownFrom(5)
//counts down from 5 
