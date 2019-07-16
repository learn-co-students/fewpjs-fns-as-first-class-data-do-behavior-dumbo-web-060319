function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(timeString) {
  var parsed = parseInt(timeString);
  if (parsed > 0 && parsed < 12) {
    return "Good Morning"
  }
  if (parsed > 12 && parsed < 17) {
    return "Good Afternoon"
  }
  if (parsed > 18 && parsed < 24) {
    return "Good Evening"
  }
}

function displayMessage(m) {
  document.getElementById('greeting').innerText = m;

}
