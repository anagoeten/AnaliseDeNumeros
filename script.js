let numeros = document.querySelector('.numeros')
let numero = document.querySelector('.numero')
let resposta = document.querySelector('.resposta')
let lista = []

function adicionar() {

    if (Number(numero.value) <= 0 || Number(numero.value) >= 100 || lista.indexOf(Number(numero.value)) != -1) {
        alert('Número invalido ou repetido')
    } else {
        lista.push(Number(numero.value))
        let itens = document.createElement('option')
        itens.text = `Valor ${Number(numero.value)} adicionado`
        numeros.appendChild(itens)  
        resposta.innerHTML = ''
    }
    numero.value = ''
    numero.focus()

}



function finalizar() {
    //let lista = document.querySelector('.numeros').length

    if (lista == 0) {
        alert('Adicione um numero')
    } else {
        /*function array(n) {
            let index = 0
            numeros = []
    
            for (index; index < n; index++){
                numeros.push(Number(document.getElementsByTagName('option')[index].value))
            }
            return numeros
        }
    
        let nums = array(lista)*/

        let nums = lista

        nums.sort()
        let comprimento = nums.length   
        let maior = nums[comprimento - 1]
        let menor = nums[0]
        
        let total = (somar(nums))
        let media = total / comprimento

        function somar(n) {
            let i = 0
            let soma = 0

            for (i; i <= nums.indexOf(maior);i++ ) {
                soma += n[i]
            }
            return soma
        }

        resposta.innerHTML = `<p>Ao todo temos ${comprimento} numeros cadastrados. </p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${total}. </p>`
        resposta.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`

    }
    
}