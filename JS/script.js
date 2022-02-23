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

var nameComplet = firstName + " " + lastName; //Contenou as aspas vazia como o espaço entre o nome e sobrenome//
// alert (nameComplet);

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

//DOM

//getElementById > pegando elemento pelo ID
// document.getElementById('exemple').innerHTML = "Darko"; 
//getElementByClassName > pegando elemento pela Class
// document.getElementsByClassName('exempleClass')[0] .innerHTML = "Frango e Patinho";
// document.getElementsByClassName('exempleClass')[1] .innerHTML = "Leg day my friend";


// getElementsByTagName > Pega pela TAG document.getElementsByTagName('button'). innerHTML = "TA";

// getElementsByName > Encontra pelo naome document.getElementsByName('email')
// document.querySelector('.exempleClass') > Consigo selecionar por ID, Class, pelo nome da tag, sempre selecinado o primeiro elemento, para selecionar todos document.querySelectolAll.


//Manipulando Class do elemento 1

function green(){
    document.querySelector('#exemple').classList.remove('blue');
    document.querySelector('#exemple').classList.remove('red');
    document.querySelector('#exemple').classList.add('green');
}

function red(){
    document.querySelector('#exemple').classList.remove('blue');
    document.querySelector('#exemple').classList.remove('green');
    document.querySelector('#exemple').classList.add('red');
}

function blue(){
    document.querySelector('#exemple').classList.remove('red');
    document.querySelector('#exemple').classList.remove('green');
    document.querySelector('#exemple').classList.add('blue');
} 

function trocar(){
     if(document.querySelector('button').classList.contains('preto')){ //a tag contains verifica se a tag já possui uma classe selecionada na função//
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else{
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}