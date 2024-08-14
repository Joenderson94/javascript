let img = document.getElementById('img')
let buttons = document.querySelector('div#buttons')
let cont=0 
let chama = null

buttons.addEventListener('click', trafficLight)

function trafficLight(event){
    let evento = event.target.id
    stopAutomatico(chama)
    console.log(evento)

    switch(evento){
        case 'green':
            img.src = './img/verde.png' ;
            break;

        case 'yellow' :
            img.src = './img/amarelo.png' ;
            break;
        case 'red' :
            img.src = './img/vermelho.png' ;
            break;
        case 'auto' :
            chama = setInterval(automatico, 1000) ;
            console.log('entrou')
            break;
    }
}

function automatico(){
    console.log('autoauto')
        if(cont == 1){
            img.src = './img/verde.png'
        } else if( cont == 2){
            img.src = './img/amarelo.png'
        } else if(cont == 3){
            img.src = './img/vermelho.png'
            cont = 0
        }        
        cont++
        
}

function stopAutomatico(){
    clearInterval(chama)
}