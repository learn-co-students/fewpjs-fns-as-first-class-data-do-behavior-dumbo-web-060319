/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let parsedTimeString = parseInt(timeString)

  if (parsedTimeString < 12) {
    return "Good Morning"
  }
  else if (12 < parsedTimeString && parsedTimeString < 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }

}

function displayMessage(string) {
  let greeting = document.querySelector('#greeting')

  greeting.innerText = string

}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
