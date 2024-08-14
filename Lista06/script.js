function testar(){
    var n1= document.getElementById('num1')
    var n2= document.getElementById('num2')
    var n3= document.getElementById('num3')
    var res1 = document.getElementById('resp1')
    var res2 = document.getElementById('resp2')
    var res3 = document.getElementById('resp3')

    var nu1= Number(n1.value)
    var nu2= Number(n2.value)
    var nu3= Number(n3.value)

    if(nu1 > 0){
        res1.innerHTML = 'POSITIVO'
        res1.style.background="green"
    } else{
        res1.innerHTML = 'NEGATIVO'
        res1.style.background="red"
    }
    if(nu2 > 0){
        res2.innerHTML = 'POSITIVO'
        res2.style.background="green"
    } else{
        res2.innerHTML = 'NEGATIVO'
        res2.style.background="red"
    }
    if(nu3 > 0){
        res3.innerHTML = 'POSITIVO'
        res3.style.background="green"
    } else{
        res3.innerHTML = 'NEGATIVO'
        res3.style.background="red"
    }

}