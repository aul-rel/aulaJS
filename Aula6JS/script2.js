let a,b;
let saida = document.getElementById("saida");
a=prompt("Digite o nome");//String
b=prompt("Digite o sobrenome");//String
saida.innerHTML=`${a} ${b}`;//Novidade
b+=" ";
b+=a;
saida.innerHTML+=`<br>${b}`;//Novidade
