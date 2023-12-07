'use strict'

window.addEventListener("load", function () {
    let btnContenido = document.getElementById("btnContenido");
    let contenido = document.getElementById("info");
    let color2 = '#FFFFFF';
    let color3 = '#445566';
    let color = "a";
    
   
    contenido.style.background = '#009966';
    let border = contenido.style.borderStyle = 'green 1em solid';
    let border2 = contenido.style.borderStyle = 'yellow 0.6em solid';
    function switchColor() {
        if (color == "a") {
            contenido.style.background = color2;
            contenido.style.border = border;
            
            color = "b";
        } else if(color == "b"){
            contenido.style.background = color3;
            contenido.style.border = border2;
            color = "a";
        }
    }

    btnContenido.addEventListener('click', function () {
        switchColor();
    })


})

