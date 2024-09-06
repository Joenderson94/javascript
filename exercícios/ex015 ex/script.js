function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#resposta')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade< 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 50){
                img.setAttribute('src', 'ojovem.png')
            }else {
                img.setAttribute('src', 'idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade< 10){
                //crianca
            }else if(idade >= 10 && idade < 50){
                //adulto
            }else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML= `Detectamos ${genero} com <strong>${idade}</strong> anos</br>`
        res.appendChild(img)
    }
}