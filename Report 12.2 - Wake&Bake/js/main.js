(function () {

    // Меню хедера

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

    // Модалка

    const openBtn = document.querySelector('.popup-open-btn')
    const closeBtn = document.querySelector('.popup__close-btn')
    const modalWind = document.querySelector('.popup')

    const openModal = () => {
        body.classList.add('body--popup-open')
        body.classList.add('body--fixed')
    }

    const closeModal = () => {
        body.classList.remove('body--popup-open')
        body.classList.remove('body--fixed')
    }

    openBtn.addEventListener('click', openModal)
    closeBtn.addEventListener('click', closeModal)

    modalWind.addEventListener('click', event =>{
    const targent = event.target
    if(targent&&targent.classList.contains('popup')){
        closeModal ()
    }
    })

    document.addEventListener('keydown', event =>{
    if (document.classList.contains('body--popup-open')) return
    if(event.code === 'Escape'){
        closeModal ()
    }
    })

    // Таб

    const tabControls = document.querySelector('.tab-conrols')
    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-conrols__link')
        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-conrols__link--active')) return

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')
    }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {
            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });
})()