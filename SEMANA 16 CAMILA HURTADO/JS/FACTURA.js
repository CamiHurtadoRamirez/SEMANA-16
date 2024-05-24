function calcular(){
    let item1=document.getElementById('prod1'); //1re item factura
    let item2=document.getElementById('prod2'); //2do item factura
    let item3=document.getElementById('prod3'); //3er item factura
    //1er item factura
    if(item1.selectedIndex==0){ //cuando no se pide nada en item factura
        document.getElementById('desc01').value=""; //descripción
        document.getElementById('vau01').value=0;
        document.getElementById('cant01').value=0;
        document.getElementById('vat01').value=0;
    }
    if(item1.selectedIndex==1){// selecciona 1er combo:hamburguesa
        document.getElementById('desc01').value="Hamburguesa americana+Gaseosa+Papas F."; //descricion
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor precio u
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0); // valor total
    }
    if(item1.selectedIndex==2){// selecciona 2do combo: perro
        document.getElementById('desc01').value="Perro americano+gaseosa+papasF."; //descricion
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor precio u
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0); // valor total
    }
    if(item1.selectedIndex==3){// selecciona 3er combo: pizza
        document.getElementById('desc01').value="Pizza campesina+gaseosa+papasF."; //descricion
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; //valor precio u
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0); // va2or total
    }
    // 2do. item factura
    if(item2.selectedIndex==0){ //cuando no se pide nada en item factura
        document.getElementById('desc02').value=""; //descripción
        document.getElementById('vau02').value=0;
        document.getElementById('cant02').value=0;
        document.getElementById('vat02').value=0;
    }
    if(item2.selectedIndex==1){// selecciona 1er combo:hamburguesa
        document.getElementById('desc02').value="Hamburguesa americana+Gaseosa+Papas F."; //descricion
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor precio u
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); // valor total
    }
    if(item2.selectedIndex==2){// selecciona 2do combo: perro
        document.getElementById('desc02').value="Perro americano+gaseosa+papasF."; //descricion
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor precio u
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); // valor total
    }
    if(item2.selectedIndex==3){// selecciona 3er combo: pizza
        document.getElementById('desc02').value="Pizza campesina+gaseosa+papasF."; //descricion
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; //valor precio u
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); // valor total
    }
        // 2do. item factura ********************************************************************************
        if(item3.selectedIndex==0){ //cuando no se pide nada en item factura
            document.getElementById('desc03').value=""; //descripción
            document.getElementById('vau03').value=0;
            document.getElementById('cant03').value=0;
            document.getElementById('vat03').value=0;
        }
        if(item3.selectedIndex==1){// selecciona 1er combo:hamburguesa
            document.getElementById('desc03').value="Hamburguesa americana+Gaseosa+Papas F."; //descricion
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; //valor precio u
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); // valor total
        }
        if(item3.selectedIndex==2){// selecciona 2do combo: perro
            document.getElementById('desc03').value="Perro americano+gaseosa+papasF."; //descricion
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; //valor precio u
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); // valor total
        }
        if(item3.selectedIndex==3){// selecciona 3er combo: pizza
            document.getElementById('desc03').value="Pizza campesina+gaseosa+papasF."; //descricion
            document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; //valor precio u
            document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); // valor total
        }
//calcular los adicionales*********************************************************
if(document.getElementById('radio4').checked){ //marca cerveza
document.getElementById('adic0').value=3000;
}else if(document.getElementById('radio5').checked){ //marca helado
document.getElementById('adic0').value=2500;    
}else if(document.getElementById('radio6').checked){ //marca helado
    document.getElementById('adic0').value=2300;  
}
//calcular subtotal***************************************************
document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)||0).toFixed(0);
//calcular iva********************************************************
document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19||0).toFixed(0);
// calcular descuento*************************************************  
if(document.getElementById('radio1').checked){ //marcado efectivo
    document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10||0).toFixed(0);
    }else if(document.getElementById('radio2').checked){ //marcado nequi
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
        }else if(document.getElementById('radio3').checked){ //marcado tarjeta credito
            document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
            }
// calcular neto a pagar**********************************************
document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)||0).toFixed(0);
}