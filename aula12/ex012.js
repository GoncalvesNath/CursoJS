var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
    //if (idade>= 16 && idade < 18) podemos usar dessa forma a sintaxe abaixo, mas logicamente não é necessário colocar as duas informações//
} else if (idade < 18 || idade >65){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}