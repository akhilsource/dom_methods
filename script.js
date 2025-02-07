let names = ["Akhil", "Venky", "Manjunath", "Ramu", "Sandya", "Kerrthi", "Manasa",
    "Abhi", "Rakesh", "Giridhar", "Yokshitha"
];
let sal = [];
for (let i = 0; i < names.length; i++) {
    sal.push(Math.floor(Math.random() * 100000) + 20000);
}
console.log(sal);


let index = 0;

function add() {
    if (index >= names.length) {
        alert("No more names left to add!");
        return;


    }
    let table = document.querySelector(".table");
    // Create a new row instead of cloning
    let new_row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = names[index];
    td2.innerHTML = sal[index];
    new_row.appendChild(td1);
    new_row.appendChild(td2);
    table.appendChild(new_row);
    index++;

}