function verifica(){
    var id = document.getElementById('idade')
    var idade = Number(id.value)
    var res = document.getElementById('resp')

    idade > 17 ? (res.innerHTML= 'maior de idade') : (res.innerHTML= 'menor de idade');
}