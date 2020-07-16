// function calcular() {
//     var number = document.getElementById('txtn')
//     var select = document.getElementById('txts')
//     var array = [select]

//     var numValue = Number(number.value)
    
//     for (var cont in array) {
//         if (numValue <= 0 || numValue > 100 || numValue == array[cont] ){
//             alert('[ERRO] Valor inserido inválido ou já presente')
//         } else {

//             var option = document.createElement('option')
//             select.appendChild(option)
    
//             option.innerText = `Valor ${numValue} adicionado.`
//             for (var pos = 0; pos < select.length; pos++) {
//                 array[pos] = numValue
//                 console.log(`A posição ${pos} tem o valor: ${array[pos]}`)
//                 console.log(array)
//             }

//         }
//     }
// }

// function verificar() {

// }

function calcular() {
    var number = document.getElementById('txtn')
    var select = document.getElementById('txts')

    var numValue = Number(number.value)

    if(numValue <= 0 || numValue > 100) {
        alert('[ERRO] Valor inserido inválido ou já existente')
    } else {
        
        var option = document.createElement('option')
        select.appendChild(option)
        option.innerText = `Valor ${numValue} adicionado.`

        var guardNumbers = [numValue]

        guardNumbers.length = select.length
        for (let c = 0; c < select.length; c++) {
            console.log(c)
            guardNumbers[c];
            console.log(guardNumbers)
        }
        
    }
}