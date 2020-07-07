function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    var now = date.getHours()
    msg.innerHTML = `Agora são ${now} horas.`

    if (now >= 0 && now < 12) {
        // Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = "#e2cd9f"
    } else if (now <= 18) {
        // Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = "#b9846f"
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = "#515154"
    }
}
