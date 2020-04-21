/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){

let timee=str.split(":");
let hour=parseInt(timee[0])

  if (hour<12) {
    return "Good Morning"
  } else if (hour<17 && hour>12) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(msg){
  let string = document.querySelector("#greeting")
  greeting.innerText=msg;
}
