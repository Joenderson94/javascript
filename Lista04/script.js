function verifica(){
    var n = document.getElementById('num')
    var n1 = Number(n.value)
    var res = document.getElementById('resp')
    if(n1 > 0){
        res.innerHTML= `POSITIVO`
        res.style.background='green' 
    }else if(n1 < 0){
        res.innerHTML= `NEGATIVO`
        res.style.background='red' 
    }else{
        res.innerHTML= 'É ZERO00!' 
        res.style.background='blue'
    }
}