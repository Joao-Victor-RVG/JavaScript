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




