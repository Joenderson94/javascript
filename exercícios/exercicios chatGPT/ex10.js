/*Crie um programa que declare um array de inteiros com 10 elementos e use um loop para contar quantos
 elementos são maiores que um valor específico (por exemplo, 25). Imprima a quantidade de elementos 
 que atendem a essa condição.*/

 let vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 let maiores = 0
 let menores = 0
 let n = 2

    for(let i = 0; i < vet.length ; i++ ){
        if (vet[i]> n){
            maiores++
        }else if(vet[i]< n){
            menores++
        }
    }

    console.log(`tem  ${maiores} maiores`)
    console.log(`tem  ${menores} menores`)