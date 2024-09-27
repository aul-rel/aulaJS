let a,b,c,d,e,f;
let saida = document.getElementById("saida");
a=50;
b=120;
c=200;
d=(a<=b) ? "Verdadeiro" : "Falso";//true, verdadeiro
e=(a>=c) ? "Verdadeiro" : "Falso";//false, falso
f=(a%2==0)?"PAR":"IMPAR";//resto da divisão
saida.innerHTML=`d = ${d}<br>`;
saida.innerHTML+=`e = ${e}<br>`;
saida.innerHTML+=`a = ${a} - é ${f} `;
