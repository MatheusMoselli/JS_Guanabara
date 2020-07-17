// Declarando variáveis
let newNumber = document.querySelector('input#txtn')
let lista = document.getElementById('txts')
let res = document.querySelector('div#res')

let valores = []

// Função que verifica se o valor estra entre 1 e 100.
function numVal(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Função que verifica se o valor já existe na lista
function inList(n, l) {
    // Se o valor informado já existir na lista, ele retornara -1 (por conta do indexOf)
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    // Se o valor foi entre 1 e 100 e NÃO estiver na lista
    if (numVal(newNumber.value) && !inList(newNumber.value, valores)) {
        // Adiciona o valor no array
        valores.push(Number(newNumber.value))
        
        let opt = document.createElement('option')
        opt.text = `Valor ${newNumber.value} adicionado.`

        lista.appendChild(opt)
    } else {
        alert('[ERROR]Valor inválido')
    }
    // Esvazia o input e coloca o foco sobre ele
    newNumber.value = ''
    newNumber.focus()

    // Esvazia o resultado
    res.innerHTML = ''
}

function finalizar() {
    maior = valores[0]
    menor = valores[0]
    soma = 0
    media = 0

    // Para cada item no array verificar se ele é maior que o primeiro
    // Se ele for, o maior recebe o valor dele.
    for (i in valores) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
    }

    // Para cada item no array verificar se ele é menor que o primeiro
    // Se ele for, o menor recebe o valor dele.
    for (i in valores) {
        if (valores[i] < menor) {
            menor = valores[i]
        }
    }
    
    // Para cada item no array, adicionar o seu valor a variável soma.
    for (i in valores) {
        soma += valores[i]
    }

    
    media = soma / valores.length
    res.innerHTML = `<p> Ao todo, temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p> O maior valor informado foi o ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi o ${menor}.</p>`
    res.innerHTML += `<p> Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
}