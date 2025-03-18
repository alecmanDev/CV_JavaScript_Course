function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = './images/foto-manha.jpg'
        document.body.style.background = 'rgb(29, 122, 222)'
    } else if (hora <= 18) {
        //BOA TARDE
        img.src = './images/foto-tarde.jpg'
        document.body.style.background = 'rgb(239, 178, 72)'
    } else {
        //BOA NOITE
        img.src = './images/foto-noite.jpg'
    }
}