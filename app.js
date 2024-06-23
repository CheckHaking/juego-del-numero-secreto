let numeroSecreto = 0
let intentos = 0
let listaNumerosSorteados = []
let numeroMaximo = 10



const asignarTexto = (elemento,texto ) => {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto
}

function condicionesInciales() {
    asignarTexto('h1','Juego del número secreto!');
    asignarTexto('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto()
    intentos = 1;

}

condicionesInciales()


function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 

    if (numeroSecreto === numeroUsuario) {

        asignarTexto("p", `Asertaste el numero en ${intentos} ${intentos === 1? 'vez' : 'veces'}`)
        document.querySelector("#reiniciar").removeAttribute('disabled')

    }else{

        //else no acerto

        if(numeroSecreto>numeroUsuario){
            asignarTexto('p', 'el numero secreto es mayor')
        }else{
            asignarTexto('p', 'el numero secreto es menor')
        }

        limpiarCaja()
    }

    intentos++;
    
}

function limpiarCaja() {

    document.querySelector('#valorUsuario').value = '';
    
}


function generarNumeroSecreto() {

       //Esto es una variable interna de la funcion
       let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1
       if(listaNumerosSorteados.length == numeroMaximo){

        asignarTexto('p', 'Ya se sortearon todos los numeros posibles')

       }else{

        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto()

        }else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }


       }
       
    
}

function reiniciarJuego(params) {

    //Limpiar Caja
    limpiarCaja()
    //Idicar mensaje de intervalo de numeros
    condicionesInciales()
    document.querySelector('#reiniciar').setAttribute('disabled', true)
       
}
