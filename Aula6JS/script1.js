let a,b,c,d;
let saida = document.getElementById("saida");
a=10;//a=10
b=2;//b=2
a+=b;// a=10+2//a=12
//b+=a;
b-=5;// b=2-5//b=-3 
saida.innerHTML="a = "+a;//a=12
saida.innerHTML+="<br>b = "+b;//b=-3
c=11;
d=6;
c%=d;//c=11%6//c=5
d+=a;//d=6+12=18
saida.innerHTML+="<br>c = "+c;//c=5
saida.innerHTML+="<br>d = "+d;//d=18