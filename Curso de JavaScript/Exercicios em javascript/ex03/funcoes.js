function contar() {
    let n1 = document.getElementById(`num1`)
    let n2 = document.getElementById(`num2`)
    let passo = document.getElementById(`passo`)
    let res = document.getElementById(`res`)

    if (n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML ='Impossível contar!'
        //alert(`[ERRO]! Faltam dados`)
        
    } else {
        res.innerHTML = `Contando...<br>`
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)
        if(p <=0) {
            alert(`Passo inválido! Considerando PASSO 1`)
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}