// /*forma de mostrar (output)*/

// document.getElementById("title").innerHTML ="Opa, tudo bem?"
// document.write('Algum texto')
// window.alert("ALERTA ALERTA")
// console.log("A mensagem que eu inserir aqui aparecera no console")

//variaveis//
var age = 18;

var x = 10;
var y = 15;

var result = x + y;


var firstName = "João Victor";
var lastName = 'Cavalcante';

var nameComplet = name + " " + lastName; //Contenou as aspas vazia como o espaço entre o nome e sobrenome//
alert (nameComplet);

var nome = "João";
console.log ( window.nome );
// let nome = "João"; Só é definido em um escopo especifico//
// const nome = "João";  Variavel de valor constante//


//Condicionais//

var hora = 12;

if ( hora < 12 ) {
    console.log("Good Morning");
} else if ( hora < 18){
    console.log("Good Afternoon")
} else if ( hora <= 23){
    console.log("Good Night")
}

if ( hora >= 12 && hora < 18 ){
    console.log("Good Afternoon2");
}

if ( hora == 12 || hora == 18 ){
    console.log("Você está na hora do rush")
}

if( lastName == 'Cavalcante'){
    console.log("you are from the cavalcante family")
}

if( firstName == 'João Victor' && lastName == 'Cavalcante' ){
    console.log("You is the correct");
}

if (firstName == 'João Victor'){
    console.log("Yes BRO =)")
}else{
    console.log("No BRO =*(")
}


