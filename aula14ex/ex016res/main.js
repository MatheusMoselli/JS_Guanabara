function contar () {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        // Para colocar emoji
        // Pegar código no site unicode.org (pesquisar unicode emoji list)
        // Ex: Feliz: U+1F603 -> Tirar U+, substituir por \u
        // E colocar o resto dos números dentro de chaves
        // U+1F603 -> \u{1F603}
        if (p <= 0) {
            alert('Passo inválido! Considerando Passo 1.')
            p = 1
        }
        if (i < f) {
            // Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }

        } else {
            // Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}