function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'img/sol-da-manha.png'
        document.body.style.background = '#f5a647'
    } else if (hora >= 12 && hora < 18) {
       //boa tarde
       img.src = 'img/sol-da-tarde.png'
       document.body.style.background = '#5c83a9'
    } else {
        //boa noite
        img.src = 'img/lua.png'
        document.body.style.background = '#564c91'
    }
}
