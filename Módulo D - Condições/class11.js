// Introdução a condições

function calcular() {
    var tN1 = document.querySelector('input#vel')
    var n1 = Number(tN1.value)
    var res = document.querySelector('div#res')

    res.innerHTML = ("<p>Sua velocidade atual é de " + n1 + "km/h</p>")
    if(n1 > 60) {
        res.innerHTML += ("Você está com excesso de velocidade. <strong>MULTADO!</strong>")
    }

    else {
        res.innerHTML += ("Dirija com segurança!")
    }
}