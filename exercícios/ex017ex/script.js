function tabuada(){
    var num1= document.getElementById("num")        
    let tab = document.getElementById("seltab")
    var num = Number(num1.value)
    var n
    
    if(num1.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        tab.innerHTML = ''
        for(var c = 0 ; c <= 10; c++){
            n= c * num
            let item = document.createElement('option')
            item.text = `${num} x ${c}= ${n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}