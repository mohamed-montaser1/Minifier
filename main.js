let input = document.querySelector(".input-code");
let output = document.querySelector(".output-code");
let button = document.querySelector(".button");

button.onclick = () => {
  if (input.value.trim() == "") return alert("Please Enter value");
  let result = input.value.replace(/\s+/g, " ");
  output.value = result;
};
