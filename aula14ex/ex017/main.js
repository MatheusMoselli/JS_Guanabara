function tabuada() {
    var numForm = document.getElementById('num')
    num = Number(numForm.value)
    
    var select = document.getElementById('select')

    select.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            var child = document.createElement('option')
            select.appendChild(child)
            child.getAttribute('value',`value${i}`)
            child.innerText += `${num} x ${i} = ` + num * i
        }
}
