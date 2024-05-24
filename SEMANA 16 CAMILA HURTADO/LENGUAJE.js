function mostrar (){
    let r1,r2,r3,r4;
    let cant=0;
    if(document.getElementById('len01').checked){
        r1="javascript";
    }else{
        r1=" ";
    }
    if(document.getElementById('len02').checked){
        r2="python";
    }else{
        r2=" ";
    }
    if(document.getElementById('len03').checked){
        r3="php";
    }else{
        r3=" ";
    }
    if(document.getElementById('len04').checked){
        r4="C#";
    }else{
        r4=" ";
    }
    document.getElementById('resp').value=r1+" "+r2+" "+r3+" "+r4;
    alert("LA CANTIDAD DE LENGUAJES SELECCIONADOS ES"+cant);
}
function borrar(){
    document.getElementById('len01').checked=false;//borrar
    document.getElementById('len02').checked=false;
    document.getElementById('len03').checked=false;
    document.getElementById('len04').checked=false;
    document.getElementById('resp').value=" ";
}