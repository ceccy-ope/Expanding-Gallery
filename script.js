const cards = document.querySelectorAll('.card')
cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        removeActiveClassList()
        card.classList.add('active')
    })
})
function removeActiveClassList(){
    cards.forEach((card)=>{
        card.classList.remove('active')
    })
}
