function carregar () {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 13
    msg.innerHTML = (`Agora são ${hora} horas`)
    if (hora >= 0 && hora <= 12) {
        //bom dia
        img.src = "../img/dia.png"
        document.body.style.background = "#f7d77e"
    } else if (hora > 12 && hora <= 18) {
        //boa tarde 
        img.src = "../img/tarde.png"
        document.body.style.background = "#bf4e08"
    } else if (hora >= 19 && hora <=23) {
        //boa noite
        img.src = "../img/noite.png"
        document.body.style.background = "#0f021f"
    } else {
        alert("DEU RUIM")
    }
}