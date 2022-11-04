
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anonasci = window.document.getElementById('nascimento')
    var res = window.document.getElementById('res')

    if (anonasci.value.length == 0 || Number(anonasci.value) > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('sexo')
        var idade = ano - Number(anonasci.value)
        var genero = ''
        var img = window.document.getElementById('img')
        img.src = ''

        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.src = 'imgs/bebeM.jpeg'
            } else if (idade <= 30) {
                img.src = 'imgs/garoto.jpeg'
            } else if (idade <= 60) {
                img.src = 'imgs/homemM.webp'
            } else {
                img.src = 'imgs/idoso.jpeg'
            }

        } else if (sexo[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.src = 'imgs/bebeF.jpg'
            } else if (idade <= 30) {
                img.src = 'imgs/garota.webp'
            } else if (idade <= 60) {
                img.src = 'imgs/mulherM.jpeg'
            } else {
                img.src = 'imgs/idosa.jpeg'
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
    }
}