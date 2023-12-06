'use strict'

window.addEventListener("load", function () {
    let btnContenido = document.getElementById("btnContenido");
    let contenido = document.getElementById("info");
    let color = '#0099FF'
    btnContenido.style.background = '#FFFFFF';
    contenido.style.background = '#009966';

    function switchColor() {
        if (contenido.style.background == color) {
            contenido.style.background = '#FFFFFF';
        } else {
            contenido.style.background = color;
        }
    }

    btnContenido.addEventListener('click', function () {
        switchColor();
    })


})

