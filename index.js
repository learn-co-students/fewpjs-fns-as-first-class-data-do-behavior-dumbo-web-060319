/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hour = parseInt(time, 10);
  if (hour < 12) {
      const greeting = "Good Morning";
      return greeting 
  } else if (hour < 18) {
      const greeting = "Good Afternoon";
      return greeting 
  } else {
      const greeting = "Good Evening";
      return greeting 
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(arg) {
  let greeting = document.getElementById("greeting")
  greeting.innerText = arg

}