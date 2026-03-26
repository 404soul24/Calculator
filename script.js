const display = document.getElementById("display");
const expr = document.getElementById("expr");
const allButtons = document.querySelectorAll(".btn-calc, .btn-eq");
const operators = ["+", "-", "*", "/"];

allButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const buttonValue = this.getAttribute("value");
    const currentDisplay = display.innerText;
    const lastChar = currentDisplay.slice(-1);

    if (this.classList.contains("btn-ac")) {
      display.innerText = "0";
      expr.innerText = "";
      return;
    }

    if (this.classList.contains("btn-eq")) {
      try {
        const result = eval(currentDisplay);
        expr.innerText = currentDisplay + " =";
        display.innerText = result;
      } catch {
        display.innerText = "Error";
      }
      return;
    }

    if (operators.includes(buttonValue) && operators.includes(lastChar)) {
      display.innerText = currentDisplay.slice(0, -1) + buttonValue;
      return;
    }

    if (currentDisplay === "0" && buttonValue !== ".") {
      display.innerText = buttonValue;
    } else {
      display.innerText += buttonValue;
    }
  });
});