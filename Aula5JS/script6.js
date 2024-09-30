/*
Criar um código JS para solicitar entrada de 3 notas. Calcular a média das 3 notas.
A saida devera mostrar cada nota digitada e a média das três notas.
Obs: cada valor de nota e média deverá ser mostrado em negrito.
*/

const n1 = parseFloat(prompt ("Digite a primeira nota aqui: "));
const n2 = parseFloat(prompt ("Digite a segunda nota aqui: "));
const n3 = parseFloat(prompt ("Digite a terceira nota aqui: "));
let resultado, m, media;
resultado = n1 + n2 + n3;
m = resultado / 3;
media = m.toFixed(2);
let saida = document.getElementById("saida");
saida.innerHTML = "A primeira nota será: <strong>"+n1+"</strong><br> A segunda nota será: <strong>"+n2+"</strong><br> A terceira nota será: <strong>"+n3+"</strong><br><br> A média das três notas será: <strong>"+media+"</strong><br>";
