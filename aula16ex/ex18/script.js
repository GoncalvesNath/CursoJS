let num = document.querySelector('input#fnum') // variavel correspondente ao número
let lista = document.querySelector('select#flista')//correspondete a lista dos numeros
let res = document.querySelector('div#res')// resultado de todos
let valores = [] // vetor|array

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else { 
        return false
    }   
} 

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}




function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já enconrado na lista.')
    }
    num.value =''//opção para limpar a caixa de numero após a inserção do elemento
    num.focus() // volta o cursor para a mesma caixa após apagar a info anterior
}

function finalizar() {
    if (valores.length === 0){
        window.alert('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

        
    }
}