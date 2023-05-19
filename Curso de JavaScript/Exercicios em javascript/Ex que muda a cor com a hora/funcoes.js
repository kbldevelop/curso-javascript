function carregar(){
let mostrar = document.getElementById(`hora`)
var img = document.getElementById(`foto`)
let h = new Date()
let hora = h.getHours()

mostrar.innerText = `Agora são exatamente ${hora} horas.`

if (hora >= 0 && hora < 12) {
    document.body.style.background = 'rgb(164, 164, 255)'
    img.innerHTML = '<img src="manhã.png">'
} else if (hora >= 12 && hora < 18) {
    document.body.style.background = 'yellow'
    img.innerHTML = '<img src="tarde.png">'
} else {
    document.body.style.background = 'darkblue'
    img.innerHTML = '<img src="noite.png">'
}

}




