/*Crie um programa que declare um array de inteiros com 5 elementos e use um
 loop para encontrar o maior e o menor elemento do array. Imprima o maior e o menor valor.*/

let vet = [8,4,1,5,6]
    maior = vet[0]
    menor = vet[0]
    //vet.push(9)
    //vet.sort()
    for(let pos in vet){
        if(maior<vet[pos]){
            maior = vet[pos]
        }
        if(menor>vet[pos]){
            menor = vet[pos]
        }
    }
    let lugar = vet.indexOf(6)
console.log(vet)
console.log(`maior ${maior}   menor ${menor}`)
//console.log(`o valor 6 esta na posicao ${lugar+1}`)