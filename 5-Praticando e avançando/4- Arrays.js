const animals = [
    'Lion',  //Posição 0
    'dog',   //Posição 1
    'cat'     //Posição 2
               //Posição 3 não está dentro do array
]


const exemplo = [
    'Lion',  
    'cat',
    'dog',
    {
        name: 'jonh`s cat',           // O JavaScript permite isso mas não é algo usual
        age: '3'
    }
]
console.log(animals)

console.log([0])

console.log([animals[1]])

// acessando os valores dentro do Array
console.log(animals[1].name) 


