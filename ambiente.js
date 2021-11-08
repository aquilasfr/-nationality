
function pesquisar () {
    var inputNacionalidade = document.querySelector('[name="txtnac"]')
    var resultado = document.querySelector('div#res')
    var teste = (inputNacionalidade.value)
    var mensagem = ''
    if (teste == '') {
        mensagem = `Por favor, preencher o campo acima não pode estar vazio!`
        alert('Preencher o campo!!')
        inputNacionalidade.classList.add('error')
    }else {
        mensagem = `Sua Nacionalidade é: ${teste}`
        inputNacionalidade.classList.remove('error')
        if (teste.toLowerCase() == 'brasileiro') {
            mensagem += `<br>Você é Patriota`
            
        }else {
            mensagem += `<br>Você é estrangeiro`
        }
        
    }
    resultado.innerHTML = `<p> ${mensagem}</p>`
}
