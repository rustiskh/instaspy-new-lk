document.addEventListener('DOMContentLoaded', () => {
    // Открытие пароля в инпутах account-settings__form-password-input
    const passwordField = document.querySelectorAll('.account-settings__form-password');

    passwordField.forEach(element => {
        const passwordInput = element.querySelector('.account-settings__form-password-input');
        const visibleBtn = element.querySelector('.visible');
        const invisibleBtn = element.querySelector('.invisible');

        function showPassword() {
            invisibleBtn.style.display = "none";
            visibleBtn.style.display = "flex";
            passwordInput.type = 'text';
        };

        function hidePassword() {
            invisibleBtn.style.display = "flex";
            visibleBtn.style.display = "none";
            passwordInput.type = 'password';
        };

        visibleBtn.addEventListener('click', hidePassword);
        invisibleBtn.addEventListener('click', showPassword);
    });

});