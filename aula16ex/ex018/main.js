function calcular() {
    // Pegar o número do INPUT
    const numNovo = document.getElementById('txtn')
    const num = Number(numNovo.value)

    // Verificar se pode ser adcionado
    if(num <= 0 || num > 100) {
        console.warn('[ERRO] Valor inválido ou já existente')
        alert('[ERRO] Valor inválido ou já existente')
    } else {
        // Adcionar no Select
        const select = document.getElementById('txts')
        const option = document.createElement('option')
        select.appendChild(option)
    
        option.innerText = `Valor ${num} adicionado.`

        // Adcionar no Array
        function addArray() {
            valores = ['']
            
            for(let c = 0; c < valores.length; c++) {
                valores.push('')
                valores[c] = num
                console.log(`valores = ${valores}`)
                console.log(`c = ${c}`)
            }
        }

        addArray()
    }
}
