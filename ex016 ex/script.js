function verificar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)     
    var resp = document.getElementById('resp')
    resp.innerHTML = ""

    if( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            window.alert('ERRO, falta DADOS')
            resp.innerHTML = ""
    }else{
            if (p == 0){
                window.alert('PASSO INVALIDO, considerado = 1')
                p=1
            }

            if(i < f){
                for(var c = i ; c <= f ; c += p ){
                    resp.innerHTML+= `${c}-->`
                }
                resp.innerHTML+= `\u{270B}` 
            }else{
                for(var c = i ; c >= f ; c -= p ){
                    resp.innerHTML+= `${c}-->`
                }
                resp.innerHTML+= `\u{270B}` 
            }       
    }
}