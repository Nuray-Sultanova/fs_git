const display = document.getElementById("display");
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculate() {
  let exp = display.value;

  if (exp.includes("!")) {
    let number = +exp.replace("!", "");
    display.value = factorial(number);
  } else {
    display.value = eval(exp);
  }
}
