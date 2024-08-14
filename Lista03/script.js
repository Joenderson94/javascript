function verifica(){
    var n = document.getElementById('num')
    var num = Number(n.value)
    var res = document.getElementById('resp')

    if(num % 2 == 0){
        res.innerHTML= `É PAR !!`
    }else {
        res.innerHTML= `È IMPAR !!` 
    }
}