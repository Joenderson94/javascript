let resp = document.querySelector('div#resp')

function calcular(){
let nome = document.querySelector('input#name')
let alt = document.querySelector('input#alt')
let pes = document.querySelector('input#peso')

    let altura = parseFloat(alt.value)
    let peso = parseFloat(pes.value)
    let classificacao = ''

    if(nome.value === '' || isNaN(altura) || isNaN(peso) || alt.value<=0 || alt.value<=0){
        window.alert('Dados inválidos ou vazio')
    } else{
        let imc = peso/(altura**2)

        if(imc >= 18.5 && imc <= 25.9){
            resp.style.backgroundColor = 'white'
            classificacao = 'NORMAL'
        }else if(imc > 25.9){
            resp.style.backgroundColor = 'red'
            classificacao = 'OBESO'
        }else{
            resp.style.backgroundColor = 'red'
            classificacao = 'MAGRO'
        }

        resp.innerHTML = `${nome.value}, seu IMC é de:${imc.toFixed(1)} e se encontra <strong>${classificacao}</strong>`
    }

    
}