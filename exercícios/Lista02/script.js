function calcula(){
    var id = document.getElementById('idade')
    var res = document.getElementById('resp')
    var idade= Number(id.value)

    if(idade <= 65 && idade >= 18){
        res.innerHTML = `Está dentro da margem!!`
    } else{
        res.innerHTML = `Está fora da margem!!` 
    }
}