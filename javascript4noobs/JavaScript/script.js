//CONSOLE
console.log("Boa tarde");
console.log(123);
console.log([1,2,3]);
console.log({ curso: "js4noobs" });

const boolean = false;
console.assert(boolean, "Mensagem a ser exibida se o boolean for falso");
console.assert((2+4) > 8, "mensagem a ser exibida se o boolean for falso");

const joVictor ={
    nome: "Jovi"
};

console.dir(joVictor);

console.error("Erro meu bom!");
console.exception("Erro meu bom só que de outra forma!")


console.log("Canais do discord");
console.group();
console.log("global");
console.group();
console.log("bate-papo");
console.log("aprendizado-diário");
console.groupEnd();


console.table(["Palmeiras", "Atlético-mg", "Flamengo"]);


const label = 'for vazio';
console.time(label);
for(let i = 0; i < 10; ++i){

};
console.timeEnd(label);

console.warn("Texto de alerta!");
