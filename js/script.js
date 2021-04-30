var names = ["Bianchi", "Rossi", "Neri", "Verdi", "Gialli"];
var yourName = prompt("Insert your last name");
var position;
var nameList;

names.push(yourName);
names = names.sort();

position = names.indexOf(yourName);

nameList = document.getElementById("names");
for (i=0; i<6; i++) {
      nameList.innerHTML += "<li>" + names[i] + "</li>";
}

document.getElementById("position").innerHTML = "You are in position nr. " + "<strong>" + (position + 1) + "</strong>" + " of the list";