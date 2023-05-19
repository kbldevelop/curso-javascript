

function jogar() {
    let cmd = document.getElementById(`cmd`)
    let j1 = 'Sasuke'
    let j2 = 'Sakura'
    let j3 = 'Naruto'
    let arena = document.getElementById(`arena`)

    if (cmd.value == 1) {
        arena.innerHTML = `Você escolheu <strong>${j1}</strong>, siga em frente.`
    }

    if(cmd.value == 2) {
        arena.innerHTML = `Você escolheu <strong>${j2}</strong>, siga em frente.`
    }

    if (cmd.value == 3) {
        arena.innerHTML = `Você escolheu <strong>${j3}</strong>, siga em frente.`
    } 

    if (cmd.value < 1 || cmd.value > 3) {
        alert(`Comando não válido!`)
    }

    
    
   


}
