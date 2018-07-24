function enviar(){
  var nome = document.getElementById("Nome");

  if(nome.value != "" ){
    alert("Obrigado "+nome.value+" ! Mas esta área está temporariamente fora de funcionamento.");
  } else {
    alert("Por gentileza, insira todos os campos.");
  }
}
