document.addEventListener('DOMContentLoaded', function() {
    var usernameInput = document.querySelector('input[type="text"]');
    var passwordInput = document.querySelector('input[type="password"]');
    var backgroundImage = document.getElementById('background-image');

    passwordInput.addEventListener('focus', function() {
        backgroundImage.style.display = 'block';
    });

    passwordInput.addEventListener('blur', function() {
        backgroundImage.style.display = 'none';
    });

    usernameInput.addEventListener('focus', function() {
        backgroundImage.style.display = 'block';
    });

    usernameInput.addEventListener('blur', function() {
        backgroundImage.style.display = 'none';
    });
});
