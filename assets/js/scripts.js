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
});