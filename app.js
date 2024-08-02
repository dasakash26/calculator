let str = "";
let hist = "";
const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");
const history = document.getElementById("history");
let arr = Array.from(buttons);
let Parenthesis = false;
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    var x = e.target.innerHTML;

    if (x == "=") {
      try {
        hist = str;
        history.value = str;
        str = eval(str);
        input.value = str;
      } catch (error) {
        str = "";
        input.value = "Error";
      }
    } else if (x == "AC") {
      str = "";
      hist = "";
      Parenthesis = false;
      input.value = str;
      history.value = hist;
    } else if (x == "DEL") {
      str = str.slice(0, -1);
      input.value = str;
    } else if (x == "()") {
      if (Parenthesis) {
        str += ")";
      } else {
        str += "(";
      }
      Parenthesis = !Parenthesis;
      input.value = str;
    } else {
      str += x;
      input.value = str;
    }
  });
});
