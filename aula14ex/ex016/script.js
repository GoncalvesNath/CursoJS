/*function contar(){
    var primeiroNumero = document.getElementById('n1')
    var segundoNumero = document.getElementById('n2')
    var intervalo = document.getElementById('int')
    var titulo = document.getElementById('titulo');
    var res = document.querySelector('div#res')
    titulo.innerHTML = 'Contando: <br>'
    res.innerHTML = primeiroNumero.value
    for(var cont = Number(primeiroNumero.value) + Number(intervalo.value);cont <= Number(segundoNumero.value);cont=cont+Number(intervalo.value)){
        res.innerHTML = res.innerHTML + ` 👉 ${cont}`
    }
    res.innerHTML = res.innerHTML + ` 🏳️`   
}*/


function contar() {
    var ini = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('int')
    var res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!' 
        //window.alert ('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br> '
        var i = Number (ini. value)
        var f = Number (fim. value)
        var p = Number (passo.value)
       
        if (p <= 0) {
            window.alert ('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} 👉`
            }

        } else {
            // Contagem regressiva
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }

        }
        res.innerHTML += `🏳️`
    }    
}