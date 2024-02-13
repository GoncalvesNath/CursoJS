let valores =[ 8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores) mostra os valores em linha, dentro do colchete

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
mostra os valores em fileira vertical, 
de forma pouco util por usar muitas linhas do código
*/
for(let pos = 0;pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //código tradicional do perurso em vetores

for(let pos in valores){ //lê se: para cada posição dentro de 'valores', vou mostrar valores[pos]
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //for in é otimizado para váriaveis compostas e objetos


/*valores.indexOf(7) busca dentro do vetor se há alguma ocorrencia 
que corresponde a informação, em caso negativo ele retorna -1*/
