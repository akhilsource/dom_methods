let names = ["Akhil", "venky", "Manjunath", "ramu", "sandya", "kerrthi", "manasa",
    "abhi", "rakesh", "giridhar", "yokshitha"
];
let sal = [];

window.onload = function() {
    for (let i = 0; i < names.length; i++) {
        sal.push(Math.floor(Math.random() * 100000) + 20000);
    }
    console.log(sal);
};
let index = 0;

function add() {
    index += 1;
    let table = document.querySelector(".table");
    let row = table.querySelector(".row");
    let new_row = row.cloneNode(true);
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = `<p>${names[index]}</p>`;
    td1.innerHTML = `<p>${sal[index]}</p>`;

}