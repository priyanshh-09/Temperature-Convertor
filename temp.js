const textbox = document.getElementById("inputbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("result");
const button = document.getElementById("btn");

let temp;

button.onclick = function() {

  if (tofahrenheit.checked) {

    temp = Number(textbox.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp + "°F";

    console.log(temp);
    

  } 
  else if (tocelsius.checked) {

      temp = Number(textbox.value);
      temp = (temp - 32) * (5/9);
      result.textContent = temp + "°C"
      console.log(temp);
  } 
  else {

    result.textContent = "please select a unit";
  }
};
