function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)

    if (fano.value.langth == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique se o ano está correto.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10)  {
                img.setAttribute('src', 'criança-menino.png')
            } else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'adolecente-homem.png')
            }else if (idade >= 18 && idade < 62) {
                img.setAttribute('src', 'homem adulto.png')
            } else {
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)  {
                img.setAttribute('src', 'criança.png')
            } else if (idade > 10 && idade < 18) {
                img.setAttribute('src', 'adolecente menina.png')
            }else if (idade >= 18 && idade < 62) {
                img.setAttribute('src', 'mulher adulta.png')
            } else {
                img.setAttribute('src', 'velha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}