                //0                   1           2
var meuArray = ["Array de pessoas","Olá mundo", "Son",1,2,"Victor","45",54,"Erik"];

// Remover no fim
console.log(meuArray.pop());
console.log(meuArray);
// Remover no ínicio
console.log(meuArray.shift());
console.log(meuArray);
// Remover no meio
console.log(meuArray.splice(1,4,"Novo elemento1","Novo elemento2","Novo elemento3"));
console.log(meuArray);
/*
// Adicionar um elemento no final
meuArray.push(350);
meuArray.push("Victor");
console.log(meuArray);
// Adicionar elementos no ínicio
meuArray.unshift("Segundo elemento");
meuArray.unshift("Primeiro elemento");
console.log(meuArray);
// Adicionar dados no meio do array
meuArray.splice(1,0,"UM","DOIS","TRES","QUATRO");
console.log(meuArray);
// Juntar dois arrays
var meuArray2 = [1,2,3,4,5,6,7,8,9,10];
var novoArray = meuArray.concat(meuArray2);
*/