const arr = [34, 56, 44, 23, -2]
let arrAtual = -1

function returnArrSequence(arr) {
    arrAtual++
    return arr[arrAtual]
}

let cont = 0;
let soma = 0;
let media = 0

while (arr[arrAtual] > 0) {
    cont++
    soma += arr[arrAtual]
}

media = soma / cont

console.log(`A média das idades é ${media.toFixed(2)}`)
