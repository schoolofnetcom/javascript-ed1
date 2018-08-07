class Pilha{
    constructor(){
        this.elementos = [];
    }

    empilhar(dado){
        // Unshift vai adicionar elementos no topo da pilha
        this.elementos.unshift(dado)
    }

    desempilhar(){
        // Remove do topo
        return this.elementos.shift();
    }

    imprimir(){
        if(this.estaVazia()){
            console.log("Pilha vazia");
        }else{
            console.log(this.elementos.toString());
        }      
    }

    topo(){
        if(!this.estaVazia()){
            return this.elementos[0];
        }
    }

    estaVazia(){
        return this.elementos.length == 0;
    }

    tamanho(){
        return this.elementos.length;
    }

    limpar(){
        this.elementos = [];
    }
}

var pilhaDeClientes = new Pilha();  
pilhaDeClientes.empilhar(10);
pilhaDeClientes.empilhar(20);
pilhaDeClientes.empilhar(30);
pilhaDeClientes.empilhar(70);
pilhaDeClientes.imprimir();
pilhaDeClientes.limpar();
pilhaDeClientes.imprimir();