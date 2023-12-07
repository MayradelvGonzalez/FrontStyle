'use strict'

window.addEventListener("load", function () {
    let btnContenido = document.getElementById("btnContenido");
    let contenido = document.getElementById("info");
    // let color = '#0099FF';
    let color2 = '#FFFFFF';
    let color3 = '#445566';
    let color = "a";

   
    contenido.style.background = '#009966';

    function switchColor() {
        if (color == "a") {
            contenido.style.background = color2;
            color = "b";
        } else if(color == "b"){
            contenido.style.background = color3;
            color = "a";
        }
    }

    btnContenido.addEventListener('click', function () {
        switchColor();
    })


})

