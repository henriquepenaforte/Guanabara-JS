
function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    var formAno = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if (formAno.value.lenght == 0 || formAno.value > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('class','foto')
        if (formSex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovem muie.jpg')
            } else if (idade < 50) {
                //adulta    
                img.setAttribute('src','mulher.jpg')
            } else {
                //idosa
                img.setAttribute('src','idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}
