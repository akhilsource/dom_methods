let names = ["Akhil", "Venky", "Manjunath", "Ramu", "Sandya", "Kerrthi", "Manasa",
    "Abhi", "Rakesh", "Giridhar", "Yokshitha"
];
let index = 0;

function Person(name, sal) {
    this.name = name;
    this.sal = sal;
    this.greet = function() {
        return `Hello, I am ${this.name}`;
    };
}
let cal = function() {
    return Math.floor(Math.random() * 100000) + 20000
}
let arr = [];
for (let i = 0; i < names.length; i++) {
    let temp = new Person(names[i], cal());
    arr.push(temp);
}

function multiply() {
    let rows = document.querySelectorAll(".trow");
    rows.forEach(row => {
        let td = row.querySelectorAll("td");
        console.log(td.length)
        if (td.length > 1)
            td[1].innerHTML = parseInt(td[1].innerHTML) * 2;
    })
}

function sort() {
    let rows = document.querySelectorAll(".trow");
    let table = document.querySelector(".table");
    let fetch_rows = function(element) {
        return element.querySelectorAll("td");
    }
    for (i = 0; i < rows.length; i++) {
        for (j = i + 1; j < rows.length; j++) {
            if (parseInt(rows[i].innerHTML) >
                parseInt(rows[j].innerHTML)
            ) {
                let temp_row = document.createElement("tr");
                tr.setAttribute("class", "trow");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                td1.innerHTML = fetch_rows(rows[j])[0];
                td2.innerHTML = fetch_rows(row[j])[1];
                fetch_rows(rows[j])[0] = fetch_rows(rows[i])[0];
                fetch_rows(rows[j])[1] = fetch_rows(rows[i])[1];
                rows[i].innerHTML = "";
                rows[i].innerHTML = td1;
                rows[i].innerHTML += td2;
            }

        }
        table.innerHTML = "";

    }

}

function add() {
    if (index >= names.length) {
        alert("No more names left to add!");
        return;
    }
    let table = document.querySelector(".table");
    let new_row = document.createElement("tr");
    new_row.setAttribute("class", "trow");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerHTML = arr[index].name;
    td2.innerHTML = arr[index].sal;
    new_row.appendChild(td1);
    new_row.appendChild(td2);
    table.appendChild(new_row);
    index++;
}