function somar(){
let num1 = document.getElementById('n1');
let num2 = document.getElementById('n2');

let number1=Number(num1.value);
let number2=Number(num2.value);

let soma = number1 + number2

 document.getElementById('resultado').innerHTML = `resultado ${soma}`
}