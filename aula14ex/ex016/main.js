var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById('res')

function contar() {
    var inicioV = Number(inicio.value)
    var fimV = Number(fim.value)
    var passoV = Number(passo.value)

    res.innerHTML = 'Contando: </br>' 

    if (passoV <= 0) {
        alert('O valor do passo precisa ser maior de 0. Substituindo o passo por 1.')
        passoV = 1

    }
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar!'
    } else if(inicioV <= fimV) {
        while (inicioV <= fimV) {
            res.innerHTML += `${inicioV} 👉 `
            inicioV += passoV

            if (inicioV > fimV) {
                res.innerHTML += `🏳️`
            }
        }
    } else  if(inicioV > fimV){
        while (inicioV >= fimV) {
            res.innerHTML += `${inicioV} 👉 `
            inicioV -= passoV

            if (inicioV < fimV) {
                res.innerHTML += `🏳️`
            }
        }
    }
}