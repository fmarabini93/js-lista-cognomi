var names = ["Bianchi", "Rossi", "Neri", "Verdi", "Gialli"];
var yourName = prompt("Insert your last name");
var position;

names.push(yourName);
names = names.sort();

position = names.indexOf(yourName);

document.getElementById("names").innerHTML = names;
document.getElementById("position").innerHTML = "You are in position nr. " + "<strong>" + (position + 1) + "</strong>" + " of the list";