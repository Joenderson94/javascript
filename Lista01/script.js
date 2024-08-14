function verificar(){
    var res = document.getElementById('resp')
    var t1 = document.getElementById('num1')
    var t2 = document.getElementById('num2')
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    if(n1 > n2){
        res.innerHTML = `O maior é: ${n1}`
    }else if(n2 > n1){
        res.innerHTML = `O maior é: ${n2}`
    } else{
        res.innerHTML = "São iguais"
    }
   
    
}