/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeArr = time.split(":");
  let hour = timeArr[0];
  let min = timeArr[1];

console.log(hour)
console.log(time)
console.log(min)
console.log(timeArr)
  if (hour > 12 && hour <= 17) {
    return "Good Afternoon";
  } else if(hour <= 12) {
    return "Good Morning";
  } else {
    return "Good Evening";
  }
  
};
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  greeting = document.querySelector('#greeting');
  greeting.innerText = str;
};