function broun () {
    let pais = document.querySelector('#pais')
    let país = String(pais.value)
    let res = document.querySelector('#res')
    if (país == "brasil") {
        res.innerHTML = ("Tu és do Bananil de facto")
    } else {
        res.innerHTML = ("Tu é um krl de um gringo")
    }
}