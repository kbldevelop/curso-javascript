var a = 'Naruto'
var b = 'Sasuke'
var c = 'Sakura'
var jogador = document.getElementById(`com1`).value
var res = document.getElementById(`res`)
res.innerHTML = `<h4>Escolha seu personagem:</h4><br> (a) Naruto<br> (b) Sasuke<br> (c) Sakura`


function jogar() {
    if (jogador == a) {
    res.innerHTML = a    
    }
}

