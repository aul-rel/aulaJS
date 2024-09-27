let a,b,res;
let saida = document.getElementById("saida");
a=9;
b=10;
res=(a<b);// 9 < 10
saida.innerHTML=`a = ${a} , b = ${b} <br>`;//a = 9, b = 10
saida.innerHTML+=`a < b : ${(a<b)} <br>`;// true
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`;// false
saida.innerHTML+="res : "+typeof(res);// 