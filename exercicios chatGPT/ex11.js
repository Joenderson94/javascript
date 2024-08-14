/*Crie um array chamado numeros que contenha os números de 1 a 5.
Use o método map para criar um novo array onde cada número é multiplicado por 2.
Use o método filter para criar um novo array contendo apenas os números pares.
Exiba ambos os arrays no console.

let vet = [1,2,3,4,5]
let vetcopia = vet.map(c => c * 2)
let vetap = vet.filter(c=> c % 2 == 0) 

console.log(vetcopia)
console.log(vetap)
*/

let vet = [19,2,7,4,5]
let soma = 0

let quant = vet.length
console.log(quant)

 vet.sort((a, b) => a - b)
 console.log(vet)

 let maior = vet[quant - 1]
 console.log(maior)
 let menor= vet[0]
 console.log(menor)

 for( let pos in vet ){
    soma+= vet[pos]
 }
 console.log(soma)
 let media = soma/quant
 console.log(media)