/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */
 function greet(string)
 {
   let time = parseInt(string.split(":")[0])
   // parseInt(a.split(":")[0])
   if (time < 12)
     return "Good Morning";

    else if (time >= 12 && 17 >= time)
    return "Good Afternoon";

    else
    return "Good Evening" ;
  }
/* Write your implementation of displayMessage() */


  function displayMessage(greet_string) {

    greet = document.querySelector("#greeting")
    greet.innerText = greet_string
    }
