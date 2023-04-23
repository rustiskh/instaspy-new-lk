document.addEventListener('DOMContentLoaded', () => {
    // Копирование кода для телеграм бота со страницы уведомлений
    const notificationCodeBtn = document.querySelector('.notifications-telegram__copy-code');

    // notificationCodeBtn.addEventListener('click', handleButtonClick);
    // notificationCodeBtn.addEventListener('touchstart', handleButtonClick);
    // notificationCodeBtn.addEventListener('touchend', handleButtonClick);

    // Почему не срабатывает на мобильных?
    function handleButtonClick() {
        const telegramCode = document.querySelector('.notifications-telegram__copy-code span');
        const iconCopy = document.querySelector('.notifications-telegram__copy-code .copy');
        const iconCopied = document.querySelector('.notifications-telegram__copy-code .copied');

        navigator.clipboard.writeText(telegramCode.textContent)
            .then(() => {
                iconCopy.style.display = "none";
                iconCopied.style.display = "block";
            });
    }
});