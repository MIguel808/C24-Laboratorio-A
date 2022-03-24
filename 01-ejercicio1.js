function mayor(lista){
    var mayor = lista[0];
  for(i=1;i<lista.length;i++){
      if(lista[i] > mayor)
          mayor=lista[i];
  }
return mayor;
}
var numero1=1;
var numero2=6;
var numero3=18;
var listadenumeros = [numero1,numero2,numero3];
alert(mayor(listadenumeros));