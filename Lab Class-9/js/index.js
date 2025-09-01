// Variable Declaration and Re-assignment
var a = 30;
var a = 45; // Re-declaring with var is allowed
document.writeln("Value of a: " + a + "<br>");

// Using let
let b = 250;
let c = "HelloWorld";
let v = 66.375;

document.writeln("Type of b: " + typeof(b) + "<br>");
document.writeln("Type of c: " + typeof(c) + "<br>");
document.writeln("Type of v: " + typeof(v) + "<br>");

// Type Casting

// Number to String
let s = b.toString();
document.writeln("b as string: " + s + "<br>");

// String to Number
let x = "550.88";
let y = 80.4596;
x = parseFloat(x);
document.writeln("x as number: " + x + "<br>");
document.writeln("Type of x: " + typeof(x) + "<br>");

// Number conversions
document.writeln("Invalid Number conversion: " + Number("XYZ") + "<br>");
document.writeln("Valid Number conversion: " + Number("567.89") + "<br>");

// Number formatting
document.writeln("y toFixed(2): " + y.toFixed(2) + "<br>");
document.writeln("y toPrecision(4): " + y.toPrecision(4) + "<br>");

// User Input
// let studFirstName = prompt("Enter your First Name");
// let studLastName = prompt("Enter your Last Name");

let studFirstName, studLastName;
studFirstName = prompt("Enter your First Name");
studLastName = prompt("Enter your Last Name");

document.writeln("<p style='color:blue;'>Hello, " + studFirstName + " " + studLastName + "!</p>");
