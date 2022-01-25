//+++++++++++++++  ZONA DE VARIABLES ++++++++++++++
const divPortada = document.querySelector(".portada");
const divJuego = document.querySelector(".juego");

const ImgMenuSuperior = document.querySelector(".imgInstrucciones");
const BtnSiguiente = document.querySelector(".imgBtnSiguiente");
const BtnJugar = document.querySelector(".imgBtnJugar");

const concepto1 = document.querySelector(".concepto1");
const concepto2 = document.querySelector(".concepto2");
const concepto3 = document.querySelector(".concepto3");
const concepto4 = document.querySelector(".concepto4");

const definicion1 = document.querySelector(".definicion1");
const definicion2 = document.querySelector(".definicion2");
const definicion3 = document.querySelector(".definicion3");
const definicion4 = document.querySelector(".definicion4");

const imgContador = document.querySelector(".imgContador")

let ambiente = new Audio(src = "sonidos/ambiente.mp3");

let contador = 0;
let seleciones = [];
let validaSeleccion = [0];


//+++++++++++++++++++++ ZONA DE FUNCIONES ++++++++++++++++++++
//+++++++++++++++++++++ Funcion oculta portada y visiviliza el juego +++++++++++++++++
function inicioJuego() {
    divPortada.addEventListener("click", function () {
        divPortada.style.visibility = "hidden";
        divJuego.style.visibility = "visible";
        ambiente.play();
    });
}

//++++++++++++++++ Eventos botones menu instrucciones y habilita menu juego +++++++++++++
function eventosMenuInstrucciones() {
    BtnSiguiente.addEventListener("click", function () {
        ImgMenuSuperior.src = "imagenes/MenuSuperior/instrucciones2.png";
        BtnSiguiente.style.visibility = "hidden"
        BtnJugar.style.visibility = "visible"
    });
    BtnSiguiente.addEventListener("mouseover", function () {
        BtnSiguiente.src = "imagenes/MenuSuperior/Botones/boton-siguiente2.png"
    });
    BtnSiguiente.addEventListener("mouseleave", function () {
        BtnSiguiente.src = "imagenes/MenuSuperior/Botones/boton-siguiente.png"
    });

    BtnJugar.addEventListener("click", function () {
        ImgMenuSuperior.src = "imagenes/MenuSuperior/Circunferencia/circunferencia1.png"
        BtnJugar.style.visibility = "hidden"
        eventosMenuJuego();
    });
    BtnJugar.addEventListener("mouseover", function () {
        BtnJugar.src = "imagenes/MenuSuperior/Botones/boton-jugar2.png"
    });
    BtnJugar.addEventListener("mouseleave", function () {
        BtnJugar.src = "imagenes/MenuSuperior/Botones/boton-jugar.png"
    });
}

//+++++++++++++++ SE AGREGA EVENTOS A LAS IMAGENES DEL JUEGO Y SE VALIDA RESPUESTAS +++++++++++++++
function eventosMenuJuego() {
    //IMAGENES CONCEPTOS 
    concepto1.addEventListener("click", function () {
        seleciones[0] = 1;
        validar();
    });
    concepto2.addEventListener("click", function () {
        seleciones[0] = 2;
        validar();
    });
    concepto3.addEventListener("click", function () {
        seleciones[0] = 3;
        validar();
    });
    concepto4.addEventListener("click", function () {
        seleciones[0] = 4;
        validar();
    });

    // IMAGENES DEFINICIONES
    definicion1.addEventListener("click", function () {
        seleciones[1] = 6;
        validar();
    });
    definicion2.addEventListener("click", function () {
        seleciones[1] = 8;
        validar();
    });
    definicion3.addEventListener("click", function () {
        seleciones[1] = 4;
        validar();
    });
    definicion4.addEventListener("click", function () {
        seleciones[1] = 2;
        validar();
    });
}

//++++++++++++++++++ FUNCION PARA VALIDAR RESPUESTAS CORRECTAS +++++++++++++++++++++++++ 
function validar() {
    if (seleciones.length == 2) {
        if (seleciones[0] == (seleciones[1] / 2)) {
            if (seleciones[0] == 2) {
                concepto2.src = "imagenes/MenuJuego/Conceptos/planeacion2.png"
                definicion3.src = "imagenes/MenuJuego/Definicion/investigacion2.png"
                ImgMenuSuperior.src = "imagenes/MenuSuperior/Circunferencia/circunferencia2.png";
                seleciones = [];
                if (!existeSeleccion(2)) {
                    sonidoAcierto();
                    contador++;
                    validaSeleccion.push(2);
                    cambiaImagenContador();
                }
            }
            if (seleciones[0] == 4) {
                concepto4.src = "imagenes/MenuJuego/Conceptos/organizacion2.png"
                definicion2.src = "imagenes/MenuJuego/Definicion/division2.png"
                ImgMenuSuperior.src = "imagenes/MenuSuperior/Circunferencia/circunferencia3.png";
                seleciones = [];
                if (!existeSeleccion(4)) {
                    sonidoAcierto();
                    contador++;
                    validaSeleccion.push(4);
                    cambiaImagenContador();
                }
            }
            if (seleciones[0] == 3) {
                concepto3.src = "imagenes/MenuJuego/Conceptos/direccion2.png"
                definicion1.src = "imagenes/MenuJuego/Definicion/ejecucion2.png"
                ImgMenuSuperior.src = "imagenes/MenuSuperior/Circunferencia/circunferencia4.png"
                seleciones = [];
                if (!existeSeleccion(3)) {
                    sonidoAcierto();
                    contador++;
                    validaSeleccion.push(3);
                    cambiaImagenContador();
                }
            }
            if (seleciones[0] == 1) {
                concepto1.src = "imagenes/MenuJuego/Conceptos/control2.png"
                definicion4.src = "imagenes/MenuJuego/Definicion/evaluacion2.png"
                ImgMenuSuperior.src = "imagenes/MenuSuperior/Circunferencia/circunferencia5.png";
                seleciones = [];
                if (!existeSeleccion(1)) {
                    sonidoAcierto();
                    contador++;
                    validaSeleccion.push(1);
                    cambiaImagenContador();
                }
            }
        } else {
            sonidoError();
            seleciones = [];
        }
    }
}

//++++++++++++++++++++ FUNCION QUE CAMBIA EL IMAGEN CONTADOR SEGUN RESPUESTAS ++++++++++++++++++++
function cambiaImagenContador() {
    if (contador == 1) {
        imgContador.src = "imagenes/Contador/10.png"
    }
    if (contador == 2) {
        imgContador.src = "imagenes/Contador/20.png"
    }
    if (contador == 3) {
        imgContador.src = "imagenes/Contador/30.png"
    }
    if (contador == 4) {
        imgContador.src = "imagenes/Contador/40.png"
        final();
    }
}

//+++++++++++++ Funciona para no aumentar contador cuendo se selecione la opcion correcta varias veces ++++++++++
function existeSeleccion(opcion) {
    for (let i = 0; i < validaSeleccion.length; i++) {
        if (opcion == validaSeleccion[i]) {
            return true;
        }
    }
    return false;
}

//++++++++++++++++++++ FUNCIONES PARA REPRODUCIR SONIDOS +++++++++++++++++ 
function sonidoAcierto() {
    let soundAcierto = new Audio();
    soundAcierto.src = "sonidos/quitaAlarma.mp3"
    soundAcierto.play();
}
function sonidoError() {
    let soundError = new Audio();
    soundError.src = "sonidos/alarmaCarro.mp3"
    soundError.play();
    setTimeout(function () {
        soundError.pause();
    }, 3000);
}
function sonidoFinal() {
    let soundFinal = new Audio();
    soundFinal.src = "sonidos/finalBackFuture.mp3"
    soundFinal.play();
    setTimeout(function () {
        soundFinal.pause();
    }, 11000);
}

//++++++++++++++++ FUNCION PARA MOSTRAR LA SECUENCIA FINAL ++++++++++++++++
function final() {
    ambiente.pause();
    sonidoFinal();
    setTimeout(function () {
        ImgMenuSuperior.src = "imagenes/MenuSuperior/felicitaciones.png";
    }, 3000);
    setTimeout(function () {
        ImgMenuSuperior.src = "imagenes/MenuSuperior/derechos.png";
    }, 7000);
}

window.onload = eventosMenuInstrucciones();
window.onload = inicioJuego();
