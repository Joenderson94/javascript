let p = document.getElementById('txt')
let botao = document.querySelector('input#button')
let mudarTxt = null
let cont=0
vet = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio']
    
botao.addEventListener('click', alterarTXT)

function alterarTXT(){
       
    mudarTxt = setInterval(mudartexto, 1000)

}
function mudartexto(){
    if(cont == 5){
        cont = 0
    }   
    p.innerHTML = `${vet[cont]}`
    console.log(cont)
     cont++   
    
}
