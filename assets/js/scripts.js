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

    console.log(statusBtn);

    let statusBtnTextIndex = 0; // начинаем с нулевого элемента массива

    setInterval(() => {
        statusBtn.textContent = statusList[statusBtnTextIndex]; // меняем текст кнопки на текущий элемент массива
        statusBtnTextIndex++; // увеличиваем индекс текущего элемента на 1
        if (statusBtnTextIndex === statusList.length) {
            statusBtnTextIndex = 0; // если достигли конца массива, начинаем сначала
        }
    }, 2000);


    console.log(statusBtn.outerText);
    console.log(statusList[1].toUpperCase());

});