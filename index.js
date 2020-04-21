/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(timeString){

  var d = new Date("July 15, 2019 " + timeString);

  if (d.getHours() < 12){
    return "Good Morning";
  } else if (d.getHours() > 12 && d.getHours() < 17){
    return "Good Afternoon";
  } else if (d.getHours() > 17){
    return "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let newH1 =document.querySelector('#greeting');
  newH1.innerText = string;
}

