var age = 67

console.log(`Você tem: ${age}`)

if (age < 16) {
    console.log('Não vota')
} else if (age < 18 || age > 65){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}