function multiplos(valor, multi){
    resto = valor % multi;
    if(resto==0)
        return true;
    else
        return false;
    }
    var multi=[];
    for(var i=1;i<=50;i++){
        if(multiplos(i,7))
        multi.push(i);
    }   
    document.write("Los multiplos de 7 son: ",multi);