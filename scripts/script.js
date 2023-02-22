// contador = () => {
//     var visualizacao = document.getElementById('contadorVisualizacao')
//     var contador = Number(visualizacao.innerText)
//     contador ++
//     visualizacao.innerText = contador
// }

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