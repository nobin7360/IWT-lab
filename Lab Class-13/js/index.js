
let num = prompt("Enter a number:");
num = Number(num);
if (num > 10) {
  document.writeln(num + " is greater than 10<br>");
} else {
  document.writeln(num + " is less than or equal to 10<br>");
}
(num === 12)
  ? document.writeln(num + " is equal to 12<br>")
  : document.writeln(num + " is not equal to 12<br>");
function square(x) {
  return x * x;
}
document.writeln("<br><span style='color:green;'>Square: " + square(num) + "</span><br>");
function applyStyle() {
  const para = document.querySelector("#paraId");
  para.classList.add("para-style");
}
function removeStyle() {
  const para = document.querySelector("#paraId");
  para.classList.remove("para-style");
}
function goNext() {
  location.href = "templates/next.html";
}
function goBack() {
  location.href = "../index.html";
}
const toggleBtn = document.querySelector("#toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.querySelector("#paraId").classList.toggle("para-style");
});
const names = ["Nobin", "Bipin", "Durjoy"];
for (let n of names) {
  document.writeln(n + ", ");
}

let person = { id: 1, name: "Durjoy" };
for (let key in person) {
  document.writeln("<br>" + key + " : " + person[key]);
}

document.writeln("<br><br>ForEach Example:<br>");
let numbers = [30, 40, 50, 60];
numbers.forEach(n => document.writeln(n + "<br>"));
const greet = () => "Hello from Arrow Function!";
document.writeln("<br>" + greet());

const calculate = (a, b) => {
  document.writeln("<br>Sum: " + (a + b));
  document.writeln("<br>Difference: " + (a - b));
};
calculate(5, 3);
