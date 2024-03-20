(function(){
    const burgerBtn = document.querySelector('.burger-icon')
    const body = document.body
    burgerBtn.addEventListener('click', event =>{
        if(document.documentElement.clientWidth > 900) return
        if(body.classList.contains('body--open-menu')){
            body.classList.remove('body--open-menu')
            body.classList.remove('body--fixed')
        }
        else{
            body.classList.add('body--open-menu')
            body.classList.add('body--fixed')
        }
    })
})()




