var names = ["Bianchi", "Rossi", "Neri", "Verdi", "Gialli", "Marroni", "Turchesi", "Grigi", "Verdini", "Arancioni"];
var yourName = prompt("Insert your last name");
var position;
var nameList;

names.push(yourName);
names = names.sort();

position = names.indexOf(yourName);

nameList = document.getElementById("names");
for (i=0; i<10; i++) {
      nameList.innerHTML += "<li>" + names[i] + "</li>";
}

console.log("You are in position " + (position + 1) + " of the list.");