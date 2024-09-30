const cidade=prompt("Digite a cidade aqui:");
const dia=parseInt(prompt ("Digite o dia aqui:"));
const mes=prompt("Digite o mes aqui:");
const ano=parseInt(prompt ("Digite o ano aqui:"));
let saida = document.getElementById("saida");
saida.innerHTML=`${cidade}, <b>${dia}</b> de ${mes} de ${ano}.`;
