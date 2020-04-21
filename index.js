/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let hr = time.split(':')[0];
  let hrs = parseInt(hr)
  if (hrs > 12 && hrs <= 17){
    return "Good Afternoon";
  } else if (hrs <=12) {
    return "Good Morning";
  } else {
    return "Good Evening";
  }
}

function displayMessage(str){
  let newGreeting = document.querySelector('#greeting');
  newGreeting.innerText = str;

}