let nome;
let nomeReal
let retorno;
let nomesDeGay;
let i = 0;

nomesDeGay = "pedro" || "luan";

function texto() {
  nome = document.getElementById("entrada").value;
  nomeReal = nome
  retorno = nome.search(nomesDeGay);
  nome = nome.toLowerCase()
  nome = nome.replace("luan", "pedro");
  nome = nome.replace("iago", "pedro");
  retorno = nome.search(nomesDeGay);
}

function verificador() {
  console.log("verificando...")
  if ( i <= retorno) {
    console.log( nomeReal+" "+"É GAY");
    document.querySelector(".saida").innerHTML = nomeReal+" "+"É GAY! Mate-o!"
    document.querySelector(".saida").style.color = "red"

  }
  else {
    console.log(nomeReal + " " + "não é gay.")
    document.querySelector(".saida").innerHTML = nomeReal+" "+"não é gay, agradeça!"
    document.querySelector(".saida").style.color = "blue"

  }
}
