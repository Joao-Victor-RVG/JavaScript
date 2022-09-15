// Callback function 

function sayMyName(name) {
    console.log('Antes de executar uma Função CallBack')

    name()

    console.log('Depois de executar a CallBack')

}

sayMyName( 
    () => {
    console.log('Estou em uma CallBack')
    }
)


// Basicamente você chama uma função normal 