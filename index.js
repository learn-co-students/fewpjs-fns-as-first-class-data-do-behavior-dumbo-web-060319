/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let timeArr = str.split(":");
  let hours = parseInt(timeArr[0]);
  let mins = parseInt(timeArr[1]);

  if (hours < 12 && hours >= 0) {
    return "Good Morning";
  } else if (hours >= 12 && hours < 17 ) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(str) {
  let el = document.getElementById("greeting");
  el.innerText = str;
}
