/*Crie um programa que declare um array de inteiros com 5 elementos e use 
um loop para somar todos os elementos do array. Imprima a soma total.*/

let num = [3, 4, 7, 5, 2]
let total = 0

for(let pos in num){
    total += num[pos]
}

console.log(total)