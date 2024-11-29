function calcular() {
    // alert("Teste");
    alert(localStorage.setItem('nome'));
    alert(localStorage.setItem('media'));

    let resultado=document.getElementById("resultado");
    let nome=document.getElementById("nome");
    let av1=document.getElementById("av1");
    let av2=document.getElementById("av2");
    let media=parseFloat(av1.value)+parseFloat(av2.value);
    let mediaf=media/2;
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('media', media);
    
    
    /* 
    7.8
    parseInt
    parseFloat
    Number

    */
    
    resultado.innerHTML="<br>nome: "+nome.value;
    resultado.innerHTML+="<br>av1: "+av1.value;
    resultado.innerHTML+="<br>av2: "+av2.value;
    resultado.innerHTML+="<br>media: "+mediaf;
}