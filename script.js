window.onload = function() {
 let saudacao = document.createElement('p');
 let horaAtual = new Date().getHours();

 if (horaAtual < 12) {
 saudacao.innerText = 'Bom dia!Já tomou um cafézinho programador?';
 } else if (horaAtual < 18) {
 saudacao.innerText = 'Boa tarde!E o cafézinho da tarde já tomou?';
 } else {
 saudacao.innerText = 'Boa noite!Aquele cafézinho pra dormir bem né programador?';
 }

 document.querySelector('header').appendChild(saudacao);
};