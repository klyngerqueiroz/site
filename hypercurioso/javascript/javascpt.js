const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

})


function vermais(n){
  let pontos=document.getElementById("pontos"+0+n);
  let maisTexto=document.getElementById("mais"+0+n);
  let btnVermais=document.getElementById("btnVerMais"+0+n);

  if(pontos.style.display === "none"){
    pontos.style.display="inline";
    maisTexto.style.display="none";
    btnVermais.innerHTML="Ver mais";
  }else{
    pontos.style.display="none";
    maisTexto.style.display="inline";
    btnVermais.innerHTML="Ver menos";
  }
};

var contador = document.querySelector('.badge');

document.querySelector('button').addEventListener('click', function(){
  var numero = parseInt(contador.textContent) + 1;
  contador.textContent = numero;
});