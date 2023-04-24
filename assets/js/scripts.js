document.addEventListener('DOMContentLoaded', () => {
    // Убирает атрибут disabled в конпках в form
    const forms = document.querySelectorAll('.form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('.general-input');
        const button = form.querySelector('.button');
        button.disabled = true;

        inputs.forEach(input => {


            input.addEventListener('input', () => {
                if (inputs.value == '') {
                    button.disabled = true;
                } else {
                    button.disabled = false;
                }
            });

            // input.addEventListener('input', () => {
            //     if (inputs[0].value === '' || inputs[1].value === '') {
            //         button.disabled = true;
            //     } else {
            //         button.disabled = false;
            //     }
            // });
        });
    });

    // Меню
    const menu = document.querySelector('.header-menu');
    const burgerBtn = document.querySelector('.header__menu-btn');
    const burgerBtnClose = document.querySelector('.header-menu__close-btn');
    const menuItem = document.querySelectorAll('.header-menu__item');

    burgerBtn.addEventListener('click', () => {
        menu.classList.add('open');
    });


    burgerBtnClose.addEventListener('click', () => {
        menu.classList.remove('open');
    });

    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !burgerBtn.contains(e.target)) {
            menu.classList.remove('open');
        }
    })

    menuItem.forEach(element => {
        element.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });

    // Лоадер к форме добавления аккаунта
    const selects = document.querySelectorAll('.custom-select');
    selects.forEach(select => {
        const loader = select.querySelector('.custom-select__loader');
        const input = select.querySelector('.custom-select__input');
        const list = select.querySelector('.custom-select__list-wrapper');

        select.addEventListener('input', () => {
            loader.style.display = "block";
            list.style.display = "block";

            if (input.value == '') {
                loader.style.display = "none";
                list.style.display = "none";
            }
        })
    });

    // Смена статусов в блоке Добавления аккаунта в кнопке Добавить аккаунт
    const statusBtn = document.querySelector('.add-account-block__btn_loading span');

    const statusList = [
        'Поиск',
        'название и описание',
        'лайки',
        'комментарии',
        'публикации',
        'отметки на фото',
        'подписки и подписчики'
    ]

    let statusBtnTextIndex = 0; // начинаем с нулевого элемента массива

    setInterval(() => {
        statusBtn.textContent = statusList[statusBtnTextIndex]; // меняем текст кнопки на текущий элемент массива
        statusBtnTextIndex++; // увеличиваем индекс текущего элемента на 1
        if (statusBtnTextIndex === statusList.length) {
            statusBtnTextIndex = 0; // если достигли конца массива, начинаем сначала
        }
    }, 2000);



    const topicSlider = new Swiper('.topic-block__slider-wrapper', {
        slidesPerView: "auto",
        centeredSlides: true,
        // spaceBetween: 6,
        slideActiveClass: 'active',
        slideToClickedSlide: true,
        loop: true,
        // slidesOffsetBefore: 150,
        // preventInteractionOnTransition: true,
        // freeMode: {
        //     enabled: true,
        //     minimumVelocity: 0.7,
        //     momentumRatio: 0.5,
        //     sticky: true,
        // },
    });

    const reviewsSlider = new Swiper('.reviews', {
        // slidesPerView: 1,
        // centeredSlides: true,
        // spaceBetween: 6,
        loop: true,
        autoHeight: true,
        bulletActiveClass: 'reviews-pagination_active',
        bulletClass: 'reviews-pagination',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },

        // slidesOffsetBefore: 150,
        // preventInteractionOnTransition: true,
        // freeMode: {
        //     enabled: true,
        //     minimumVelocity: 0.7,
        //     momentumRatio: 0.5,
        //     sticky: true,
        // },
    });

    const updateDataSlider = new Swiper('.feed-update-block__slider', {

        // autoHeight: true,

        slidesPerView: "auto",
        centeredSlides: true,
        slideActiveClass: 'active',
        slideToClickedSlide: true,

        navigation: {
            nextEl: '.feed-update-block__slider-next',
            prevEl: '.feed-update-block__slider-prev',
        },
    });
});