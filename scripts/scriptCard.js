var card01 = document.getElementById('card01')
var cards = document.getElementById('cards')

// showCards = () => {
//     cards.style.transitionDuration = "10s"
//     cards.style.display = "flex"
// }

addTextCard = () => {
    card01.style.transition = "0.5s"
    card01.style.backgroundColor ="var(--cor4)"
    card01.style.transform = "scale(1.5)"
}

backCardToNormal = () => {
    card01.style.transition = "0.5s"
    card01.style.backgroundColor = "var(--cor1)"
    card01.style.transform = "scale(1)"
    label1.style.transition = "0.5s"
    label1.style.display = "block"
}