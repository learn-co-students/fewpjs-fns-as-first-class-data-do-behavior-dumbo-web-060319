/* Given Code, don't edit */

function handleClick(e) 
{
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str)
{
  let ans = str.split(":");
  let hr = parseInt(ans[0])
  if (hr < 12)
  {
    return "Good Morning"
  }
  else if (hr > 12 && hr < 17)
  {
    return "Good Afternoon"
  }
  else if (hr >= 17 && parseInt(ans[0]) > 0)
  {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str)
{
  let x = document.querySelector("#greeting")
  x.innerText = str 
}