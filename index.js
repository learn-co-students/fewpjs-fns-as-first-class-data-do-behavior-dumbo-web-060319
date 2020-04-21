/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let num = parseInt(time.split(":")[0])
  if (num < 12)
    return "Good Morning"
  else if (num >= 12 && 17 >= num)
    return "Good Afternoon"
  else if (num > 17)
    return "Good Evening"
}
/* Write your implementation of displayMessage() */

function displayMessage(string) {
 debugger 
  document.querySelector("#greeting").innerText = string
//document...innertext 
}