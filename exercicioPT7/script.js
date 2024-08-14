let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resp = document.querySelector('div#resp')
let valores = []

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
    } else {
        window.alert('Valor já adicionado ou inválido')
    }
    num.value = ''
    num.focus()
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function finalizar(){
    if(valores.length == 0){
        window.alert('erro, sem dadoss')
    } else {
        let quant = valores.length
        valores.sort((a, b)=> a -b)
        let maior = valores[quant - 1]
        let menor = valores[0]
        let soma = 0
            
    for(let pos in valores){
        soma += valores[pos]
    }
    resp.innerHTML = `Quantidade de números: ${quant}<br>
                Maior número: ${maior}<br>
                Menor número: ${menor}<br>
                Soma dos números: ${soma}<br>
                Média dos números: ${soma/quant}<br>`
    }   
    

    
}




































/*function adiciona(){
    let num = document.getElementById('num')
    let caix = document.getElementById('caixalog')
    let n1 = Number(num.value)
    let vet= []
    let resp= document.getElementById('resp')
    let fim = finalizar(1)

    if(num.value.length == 0){ // se não tem nada digitado
        window.alert('É necessário digitar um numero')
    } else if (n1 <= 100 && n1 > 0 ) {// verificar se esta entre 0 e 100                       
            let item = document.createElement('option')             
            item.text=`${n1}`
            caix.appendChild(item)            
            vet.push(item.value)            
           
        }else{
        window.alert('dados Inválidos digite entre 1 e 100!!!')
    }
    
}

function finalizar(a){
    if (a==1){
        return true
    }else{
        return false
    }
}*/

