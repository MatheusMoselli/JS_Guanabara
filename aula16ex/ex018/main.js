function calcular() {
    var number = document.getElementById('txtn')
    var select = document.getElementById('txts')
    var array = [select]

    var numValue = Number(number.value)
    
    for (var cont in array) {
        if (numValue <= 0 || numValue > 100 || numValue == array[cont] ){
            alert('[ERRO] Valor inserido inválido ou já presente')
        } else {

            var option = document.createElement('option')
            select.appendChild(option)
    
            option.innerText = `Valor ${numValue} adicionado.`
            for (var pos = 0; pos < select.length; pos++) {
                array[pos] = numValue
                console.log(`A posição ${pos} tem o valor: ${array[pos]}`)
                console.log(array)
            }

        }
    }
}

function verificar() {

}