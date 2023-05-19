/*Personagens*/
var a = 'Naruto'
var b = 'Sasuke'
var c = 'Sakura'
var jogador = b

console.log(`Escolha seu jogador:`)
console.log(`Aperte (a) para escolher: ${a}`)
console.log(`Aperte (b) para escolher: ${b}`)
console.log(`Aperte (c) para escolher: ${c}`)

    if (jogador == a) {
    console.log(`Você escolheu ${a}`)
} else if (jogador == b) {
    console.log(`Você escolheu ${b}`)
} else if (jogador == c) {
    console.log(`Você escolheu ${c}`)
} else {
    console.log(`Você precisa escolher um personagem!`)
}


/*Batalha*/


var atk = 0
var def = 0
var inimigo = 100
var vida = 100
var escolha = atk

console.log(`O inimigo tem 100% de vida, Você precisa ataca-lo para dar 20% de dano. `)
console.log(`Ou você pode denfender o ataque do inimigo perdendo apenas 2% de vida (O ataque do inimigo também da 20% de dano.!).`)
console.log(`FIQUE ATENTO!!! se você demorar o inimigo vai te atacar.`)
console.log(`Digite (atk) para atacar o inimigo.`)
console.log(`Digite (def) para defender o ataque do inimigo.`)
    if (escolha == atk) {
        inimigo = inimigo -20
        console.log(`Você atacou o inimigo e tirou 20% de vida ${80}/100`)
    } else if (escolha == def) {
        vida = vida -2
        console.log(`Você defendeu o ataque do inimigo e levou apenas 2% de dano! ${vida}/100`)
    } else if (escolha != atk && escolha != def) {
        vida = vida -20 
        console.log(`Você foi atacado pelo inimigo e perdeu 20% de vida ${vida}/100`)
    } else {
        console.log(`Você foi atacado pelo inimigo e perdeu 20% de vida ${vida}/100`)
    }
   
