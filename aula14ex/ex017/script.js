function contar (){
    var num = document.getElementById('n1')
    var tab = document.getElementById('seltab');
    
    if(num.value.length == 0){
      window.alert('Por favor, dgite um número!')
    }else {
      var n = Number(num.value)
      var c = 1
      tab.innerHTML = ''
      while (c <= 10) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
      }
    }
}