var now = new Date()        // Pega o horário atual
var time = now.getHours()   // Pega a HORA do horário atual
console.log(`Agora são exatamente ${time} horas`)

if (time < 6) {
    console.log('Vai dormir!')
} else if (time < 12) {
    console.log('Bom dia')
} else if (time <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
