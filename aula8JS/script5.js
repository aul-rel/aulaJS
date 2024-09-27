let a, b, c;
let saida = document.getElementById("saida");
a-10;
b=10;
c=11;
saida.innerHTML="Menor = "+(a<b)+"<br>";//false
saida.innerHTML+="Menor ou igual = "+(a<=b)+"<br>";//false
saida.innerHTML+="Maior = "+(c>b)+"<br>";//true
saida.innerHTML+="Maior ou igual = "+(c>=b)+"<br>";//true