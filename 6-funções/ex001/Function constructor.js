/*
    Function( ) constructor

    * Expresão new
    * Criar um novo objeto
    *  This keyword
*/


function Person (name) {
    this.name = name
    this.walk = function( ) {
        return this.name + " Está andando "
    }
}

const mayk = new Person("Mayk")
const joao = new Person("Joao")
console.log(mayk.walk( ))         // Uma função dentro de outra função
console.log(joao.walk( ))




// Outro exemplo de Funções construtores  com JavaScript

let date = new Date("2022-09-29")
console.log(date)

