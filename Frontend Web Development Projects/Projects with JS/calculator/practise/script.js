let buttons = document.querySelectorAll(".button");
let display = document.querySelector("input");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.textContent == "AC") {
      string = "";
      display.value = string;
    } else if (button.textContent == "DEL") {
      string = string.slice(0, -1);
      display.value = string;
    } else if (button.textContent == "=") {
      string = eval(string);
      display.value = string;
    } else {
      string = string + button.textContent;
      display.value = string;
    }
  });
});
