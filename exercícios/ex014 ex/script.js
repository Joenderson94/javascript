function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = "Bom dia"
        img.src = './fotos/fotomanha.png'
        document.body.style.background = "yellow"
    }else if (hora >= 12 && hora<18) {
        msg.innerHTML = "Boa tarde"
        img.src = './fotos/fototarde.png'
        document.body.style.background = "red"
    }else {
        msg.innerHTML = "Boa noite"
        img.src = "./fotos/fotonoite.png"
        document.body.style.background = "black"
    }

}