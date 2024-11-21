function saludar(){
    let salida = document.getElementById("salida_boton");
    salida.innerText = "Hola desde la salida de la funcion saludar";

    salida.innerText = "Hola desde la funcion saludar";

}

let otro_boton = document.getElementById("otro_boton");

otro_boton.addEventListener("click", function() {
    let salida = document.getElementById("salida_otro");
    salida.innerText = "Otro saludo 😶‍🌫️"
});

otro_boton.addEventListener("mouseenter", function(){
    this.innerText = "Entro el mouse";

});


otro_boton.addEventListener("mouseleave", function(){
    this.innerText = "Salio el mouse";

});

otro_boton.addEventListener("mousemove", function(){
    this.innerText = "🐀";

});

let nombreTxt = document.getElementById("nombre");
let salida_teaclado = document.getElementById("salida_teclado");

nombreTxt.addEventListener("keydown", function(event){
    salida_teclado.innerHTML = `Se presiono <kbd>${event.key}</kbd>` ;

});

let miForm = document.getElementById("miForm");
miForm.addEventListener("submit", function (event){
    event.preventDefault();
    //alert("se intentó procesar el formulario");
    let aTxt = document.getElementById("a");
    let bTxt = document.getElementById("b");
    //console.log(a,b);
    let salida = document.getElementById("salida_suma");

    //let resultado = aTxt.value + bTxt.value;

    let a = parseInt(aTxt.value);
    let b = parseInt(bTxt.value);
    let resultado = a+b;
    salida.innerText = resultado;
});

