let a;
let saida = document.getElementById("saida");
a=parseInt(prompt("Digite um número"));//100
saida.innerHTML="a = "+ (a++);//101
saida.innerHTML+="<br>a final = "+ a;//101
a=10;
a++;//11
a++;//12
++a;//13
saida.innerHTML="a + "+ a;//a = 13
a--;//12
a--;//11
--a;//10
--a;//9
saida.innerHTML+="a = "+ a;//a = 9