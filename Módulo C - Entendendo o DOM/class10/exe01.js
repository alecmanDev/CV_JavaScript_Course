

function somar() {
    var vN1 = document.getElementById('tn1')
    var vN2 = document.getElementById('tn2')
    var res = document.getElementById('res')

    var n1 = Number(vN1.value)
    var n2 = Number(vN2.value)

    var som = n1 + n2

    res.innerHTML = `A soma de ${n1} e ${n2} é ${som}`
}