/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hours = time.split(":")[0]
  const hoursInt = parseInt(hours, 10) 
  if (hoursInt < 12) {
    return "Good Morning";
  } else if (hoursInt >= 12 && hoursInt <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string) {
  document.querySelector('#greeting').innerText = `${string}`;
}