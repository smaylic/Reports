const openBtn = document.querySelector('.btn-modal')
const modalWind = document.querySelector('.modal')
const body = document.body

const openModal = () => {
    body.classList.add('body--modal-open')
    body.classList.add('body--fixed')
}

const closeModal = () => {
    body.classList.remove('body--modal-open')
    body.classList.remove('body--fixed')
}

openBtn.addEventListener('click', openModal)

modalWind.addEventListener('click', event =>{
    const targent = event.target

    if(targent&&targent.classList.contains('modal')||targent.classList.contains('btn-close')){
        closeModal ()
    }
})

document.addEventListener('keydown', event =>{
    if(event.code === 'Escape'){
        closeModal ()
    }
})

