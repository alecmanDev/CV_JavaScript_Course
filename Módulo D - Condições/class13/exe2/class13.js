function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique o dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './images/crianca-homem.jpg')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', './images/jovem-homem.jpg')
            } else if (idade <= 65) {
                // Adulto
                img.setAttribute('src', './images/adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './images/idoso-homem.jpg')
            }
        
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', './images/crianca-mulher.jpg')
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', './images/jovem-mulher.jpg')
            } else if (idade <= 65) {
                // Adulto
                img.setAttribute('src', './images/adulto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', './images/idoso-mulher.jpg')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
