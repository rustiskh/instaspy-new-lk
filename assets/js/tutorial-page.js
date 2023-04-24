document.addEventListener('DOMContentLoaded', () => {
    //    Открытие разделов инструкции
    const tutorialItem = document.querySelectorAll('[data-item=tutorial-item]');
    console.log(tutorialItem);

    tutorialItem.forEach(element => {
        console.log(element);
        const openBtn = element.querySelector('[data-type=opener]');
        openBtn.addEventListener('click', () => {
            element.classList.toggle('open');
        });
    });
});