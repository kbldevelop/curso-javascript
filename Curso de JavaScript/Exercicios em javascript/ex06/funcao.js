    var nadd = document.getElementById(`addn`)
    var mostrar = document.getElementById(`mostra`)
    let res = document.getElementById(`res`)
    let valores = []

    function isNumero(n) {
        if (Number(n) >= 1 && Number(n) <= 100) {
            return true 
        } else {
            return false
        }
    }

    function inLista(n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }
    
function adicionar() {
    if (isNumero(nadd.value) && !inLista(nadd.value, valores)) {
        valores.push(Number(nadd.value))
        let item = document.createElement('option')
        item.text = `Valor ${nadd.value} foi adicionado.`
        mostrar.appendChild(item)
        
    } else {
        alert(`Valor já encontrado na linsta.`)
    }
    nadd.value = ``
    nadd.focus()
}


function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de começar.`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>Omaior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é igual ${media}`
    }
}
