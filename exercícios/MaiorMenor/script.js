let tabela = document.querySelector('select#tabel')
let num = document.querySelector('input#num')
let resp = document.querySelector('div#resp')
let vet = []


function adicionar(){
    if(isnum(num.value) && numvalido(num.value, vet)){
        resp.innerHTML = ''
        vet.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `${num.value} adicionado`
        tabela.appendChild(item)        
    }else {
        window.alert('Erro! número inválido ou repetido!')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(vet.length== 0){
        window.alert('adicione valores')
    }else {
        let maior= vet[0]
    let menor= vet[0]
    let soma = 0

    for (let pos in vet){
        if(maior < vet[pos]){
            maior = vet[pos]
        }else if(menor > vet[pos]){
            menor = vet[pos]
        }
        soma += vet[pos]
    }
        let media = soma/vet.length

    resp.innerHTML = `<p>maior = ${maior}</p> <p>menor = ${menor}</p> <p>media = ${media}</p> `
    } 
}

function numvalido(n, v){
    if(v.indexOf(Number(n)) == -1){
        return true
    }else {
        return false
    }
}

function isnum(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else {
        return false
    }

}



