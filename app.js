// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value
    //console.log(nombre)
    
    if (nombre.trim() == ""){
        alert("Por favor, ingresa un nombre");
        limpiarCaja();
    }else if(amigos.includes(nombre)){
        alert("Este nombre ya se ha ingresado");
        limpiarCaja();
    }else{
        //console.log(`${nombre} añadido con éxito`);
        amigos.push(nombre);
        imprimirLista();
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

function imprimirLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if(amigos.length > 0){
        let random = Math.floor(Math.random() * amigos.length);
        let sorteadoHTML = document.getElementById("listaAmigos");
        sorteadoHTML.innerHTML = `El nombre del amigos sorteado es: ${amigos[random]}`;
    }else{
        alert("No has ingresado ningún nombre");
    }

}

let amigos = [];


