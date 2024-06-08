(function () {

    if (document.documentElement.clientWidth < 970){
        const activeContent = document.querySelectorAll('.tab-content--show')
        activeContent.forEach(el => {
            el.style.maxHeight = el.scrollHeight + 'px'
        })
    }
    

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 970) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


    // Модалка
    const body = document.querySelector('.body')
    const openModalBtn = document.querySelector('.button--title')
    const closeModalBtn = document.querySelectorAll('.modal__close')
    const modalWind = document.querySelectorAll('.modal')

    const openModalProjectBtn = document.querySelector('.projects__main')


    const openModal = () => {
        body.classList.add('body--modal-open')
        body.classList.add('body--fixed')
    }

    const closeModal = () => {
        body.classList.remove('body--modal-open')
        body.classList.remove('body--project--modal-open')
        body.classList.remove('body--fixed')
    }


    closeModalBtn.forEach(e => {
        e.addEventListener('click', closeModal)
    });

    openModalBtn.addEventListener('click', openModal)
    
    // Модалка проэктов

    const openModalProject = () => {
        body.classList.add('body--project--modal-open')
        body.classList.add('body--fixed')
    }


    openModalProjectBtn.addEventListener('click', openModalProject)


    modalWind.forEach(el => {

        el.addEventListener('click', event =>{
        const targent = event.target
        if(targent&&targent.classList.contains('modal')){
            closeModal ()
            closeModalProject ()
        }
        })
    });
    

        document.addEventListener('keydown', event =>{
        if (!body.classList.contains('body--modal-open') && !body.classList.contains('body--project--modal-open')) return
        
        if(event.code === 'Escape'){
            closeModal ()
            closeModalProject ()
        }
        })


        // Табы

        const tabControls = document.querySelector('.tab-conrols')

        tabControls.addEventListener('click', toggleTab)
    
        function toggleTab(e) {
    
            const tabControl = e.target.closest('.tab-conrols__item')
    
            if (!tabControl) return
            e.preventDefault()
            if (tabControl.classList.contains('tab-conrols__active')) return
    
            const tabContentID = tabControl.getAttribute('data-tab')
            const tabContent = document.querySelectorAll(`.${tabContentID}`);
            const activeControl = document.querySelector('.tab-conrols__active')
            const activeContent = document.querySelectorAll('.tab-content--show')
    
            tabContent.forEach(el => {
                if (activeControl) {
                    activeControl.classList.remove('tab-conrols__active')
                }

                activeContent.forEach(el => {
                    if (activeContent) {
                        el.classList.remove('tab-content--show')
                        el.style.maxHeight = null;
                    }
                })

                tabControl.classList.add('tab-conrols__active')
                el.classList.add('tab-content--show')
        
                if (el.classList.contains('tab-content--show')) {
                    el.style.maxHeight = el.scrollHeight + 'px'
                } else {
                    el.style.maxHeight = null;
                }
            })


        }

    // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-btn');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {
            const accordion = e.currentTarget

            e.preventDefault()
            const accordionControl = accordion.parentElement

            const accordionContent = accordionControl.querySelector('.accordion__content')

            accordionControl.classList.toggle('accordion--opened')

            if (accordionControl.classList.contains('accordion--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });


    // Слайдер

    new Swiper('.project__modal--swiper--wrapper--petergof', {

        spaceBetween: 20,
        slidesPerView: 1,
        allowTouchMove: false,

        navigation: {
            nextEl: '.modal--swiper--svipe-right--petergof',
            prevEl: '.modal--swiper--svipe--petergof',
        },

        breakpoints: {
            1040:{
                slidesPerView: 3,
            },
            1250:{
                spaceBetween: 30,
            }
        }
    });


    new Swiper('.project__modal--swiper--wrapper--pravdenskoe', {

        spaceBetween: 20,
        slidesPerView: 1,
        allowTouchMove: false,

        navigation: {
            nextEl: '.modal--swiper--svipe-right--pravdenskoe',
            prevEl: '.modal--swiper--svipe--pravdenskoe',
        },

        breakpoints: {
            1040:{
                slidesPerView: 3,
            },
            1250:{
                spaceBetween: 30,
            }
        }
    });

    
    new Swiper('.project__modal--swiper--wrapper--repino', {

        spaceBetween: 20,
        slidesPerView: 1,
        allowTouchMove: false,

        navigation: {
            nextEl: '.modal--swiper--svipe-right--repino',
            prevEl: '.modal--swiper--svipe--repino',
        },


        breakpoints: {
            1040:{
                slidesPerView: 3,
            },
            1250:{
                spaceBetween: 30,
            }
        }

    });


    new Swiper('.project__modal--inner', {

        spaceBetween: 300,
        slidesPerView: 1,
        centeredSlides: true,
        
        navigation: {
            nextEl: '.project__modal--svipe--right',
            prevEl: '.project__modal--svipe',
        },

        
    });

    // Слайдер

    const SwiperWrapperReviews = document.querySelector('.reviews__wrapper')

    if (document.documentElement.clientWidth < 1100){
        SwiperWrapperReviews.classList.add('swiper-wrapper')
    }
    else{
        SwiperWrapperReviews.classList.remove('swiper-wrapper')
    }

    new Swiper('.reviews__cases', {

        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        
        

        navigation: {
            nextEl: '.reviews--svipe--right',
            prevEl: '.reviews--svipe',
        },

        breakpoints: {
            550:{
                slidesPerView: 1.5,
            }
        }

    });

    // Слайдер

    const SwiperWrapperProjects = document.querySelector('.projects__main')

    if (document.documentElement.clientWidth < 450){
        SwiperWrapperProjects.classList.add('swiper-wrapper')
    }
    else{
        SwiperWrapperProjects.classList.remove('swiper-wrapper')
    }

    new Swiper('.projects__main--wrapper', {

        spaceBetween: 30,
        slidesPerView: 1,
        
        navigation: {
            nextEl: '.project--svipe--right',
            prevEl: '.project--svipe',
        },

    });




})()