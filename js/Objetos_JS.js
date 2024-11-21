/*let nombre = prompt("¿Como te llamas?");

if (nombre) {
    alert(`Hola ${nombre}`);
} else {
    alert("Anonimo");
} */

let lista = document.getElementById("log");

function registro(texto) {
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}
lista.appendChild(registro("DOM LOADED"))

let timer = setTimeout (() => {
    lista.appendChild(registro("Timer a los 3 segundos"));
}, 3000);

let repetidor = setInterval(() => {
    lista.appendChild(registro("cada 1.5 segundos"));
}, 1500);

let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("stopBtn");

activaTimerBtn.addEventListener("click", function() {
    lista.appendChild(registro("IniciarTimer..."));
    clearTimeout(timer);
    timer.setTimeout(3000);
});

stopBtn.addEventListener("click", function() {
    lista.appendChild(registro("Parar repetidor..."));
    clearInterval(repetidor);
});

console.table(location);
let secure = document.getElementById("secure");
if (location.protocol.value == "https") {
    secure,innerText = "Seguro";
} else {
    secure,innerText = "No seguro";
}

console.table(navigator);

let fecha_actual = new Date ();

console.log(fecha_actual.getFullYear());
console.log(fecha_actual.getMonth());
console.log(fecha_actual.getDate());
console.log(fecha_actual.getHours());
console.log(fecha_actual.getMinutes());
console.log(fecha_actual.getSeconds());

let navidad_2024 = new Date("2024-12-24 12:00:00");
let fin_2024 = new Date(2024, 11 , 31, 23, 59, 59);