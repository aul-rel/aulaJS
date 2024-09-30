const num1 = parseInt(prompt ("Digite um número aqui:"));//5
const num2 = parseFloat (prompt ("Digite um número aqui:"));//7
let result = num1 + num2;//se prompt, concatena Strings digitadas. Se parseNumber, soma as entradas digitadas
let saida = document.getElementById("saida");
saida.innerHTML="Resultado da soma = "+result+"<br>";

