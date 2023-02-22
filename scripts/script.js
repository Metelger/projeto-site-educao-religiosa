var visualizacao = document.getElementById('contadorVisualizacao')

contador = () => {
    var contador = Number(visualizacao.innerHTML)
    contador += 1
    visualizacao.innerHTML = contador
}

mudaStyle =() => {
    var txtPublicados = document.getElementById('txtPublicados')
    if(txtPublicados.className === 'dropdown'){
        txtPublicados.className = 'dropdown dropdown2'
        console.log(txtPublicados.className)
    } else {
        txtPublicados.className = 'dropdown'
        console.log(txtPublicados.className)
    }
}