function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var formYear = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formYear.value.length == 0 || formYear.value > year) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(formYear.value)
        var gender = ''

        var img = document.createElement('img')
        img.setAttribute('id','pic')

        if (fsex[0].checked) {
            gender = 'Homem'
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src','homem_crianca.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src','homem_jovem.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src','homem_adulto.png')
            } else {
                // Idoso
                img.setAttribute('src','homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            gender = 'Mulher'
            if (age >= 0 && age < 10) {
                // Criança
                img.setAttribute('src','mulher_crianca.png')
            } else if (age < 21) {
                // Jovem
                img.setAttribute('src','mulher_jovem.png')
            } else if (age < 50) {
                // Adulto
                img.setAttribute('src','mulher_adulta.png')
            } else {
                // Idoso
                img.setAttribute('src','mulher_idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gender} com: ${age} anos`
        res.appendChild(img)
    }
}