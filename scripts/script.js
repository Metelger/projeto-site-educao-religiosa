// contador = () => {
//     var visualizacao = document.getElementById('contadorVisualizacao')
//     var contador = Number(visualizacao.innerText)
//     contador ++
//     visualizacao.innerText = contador
// }

mudaStyle = () => {
    var txtPublicados = document.getElementById('txtPublicados')
    if(txtPublicados.className === 'dropdown'){
        txtPublicados.className = 'dropdown dropdown2'
        console.log(txtPublicados.className)
    } else {
        txtPublicados.className = 'dropdown'
        console.log(txtPublicados.className)
    }
}
var textGenerate = false
var textGenerate2 = false

chamaTexto = () => {
    console.log("entrou na função")
    const text01 = document.getElementById('text01')
    const showText = document.createElement('embed');
    const photo = document.getElementById('photo')

    showText.setAttribute('src', '../docs/texto01.pdf');
    showText.setAttribute('width', '90%');
    showText.setAttribute('height', '1000px');

    photo.style.display = 'none'

    if(textGenerate === false){
        text01.appendChild(showText)
        textGenerate = true
        console.log(textGenerate)
    } else {
        console.log('entrou aqui')
    }

}

chamaTexto2 = () => {
    console.log("entrou na função")
    const text01 = document.getElementById('text01')
    const showText = document.createElement('iframe');
    const photo = document.getElementById('photo')

    showText.setAttribute('src', '../docs/texto02.html');
    showText.setAttribute('width', '90%');
    showText.setAttribute('height', '1000px');
    showText.style.border = 'none'

    photo.style.display = 'none'

    if(textGenerate2 === false){
        text01.appendChild(showText)
        textGenerate2 = true
        console.log(textGenerate2)
    } else {
        console.log('entrou aqui')
    }

}


teste = () => {
        
    if(localStorage.getItem('text01') === null){
        localStorage.setItem('text01', true);
       
    }

}