/****************************************************
*                  The if Statement                 *
****************************************************/
if (new Date().getHours() < 18) {
  document.getElementById("if-hour").innerHTML = "Good Job";
}

function elseFunction() {
  var hour = new Date().getHours();
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("else").innerHTML = greeting;
}

function elseifFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
      greeting = "Good day";
  } else {
      greeting = "Good evening";
  }
  document.getElementById("elseif-function").innerHTML = greeting;
}
