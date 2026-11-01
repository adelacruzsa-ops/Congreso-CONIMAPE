function mostrar(id){

let secciones=document.querySelectorAll(".caja");

secciones.forEach(function(sec){

sec.style.display="none";

});


document.getElementById(id).style.display="block";

}

// CONTADOR CONIMAPE 2026

const fechaEvento = new Date("October 15, 2026 09:00:00").getTime();


setInterval(function(){

let ahora = new Date().getTime();

let diferencia = fechaEvento - ahora;


let dias = Math.floor(
diferencia/(1000*60*60*24)
);


let horas = Math.floor(
(diferencia%(1000*60*60*24))/(1000*60*60)
);


let minutos = Math.floor(
(diferencia%(1000*60*60))/(1000*60)
);


let segundos = Math.floor(
(diferencia%(1000*60))/1000
);


document.getElementById("dias").innerHTML=dias;

document.getElementById("horas").innerHTML=horas;

document.getElementById("minutos").innerHTML=minutos;

document.getElementById("segundos").innerHTML=segundos;


},1000);