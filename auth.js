document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    const closeBtn = document.querySelector('.close-btn');
    const toggleLinks = document.querySelectorAll('.toggle-btn');
    const loginContainer = document.querySelector('.login-container');
    const registerContainer = document.querySelector('.register-container');

    loginBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    });

    registerBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    toggleLinks.forEach(link => {
        link.addEventListener('click', () => {
            loginContainer.style.display = loginContainer.style.display === 'none' ? 'block' : 'none';
            registerContainer.style.display = registerContainer.style.display === 'none' ? 'block' : 'none';
        });
    });

    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const password = document.getElementById('register-password');
        const passwordConfirm = document.getElementById('register-password-confirm');
        const email = document.getElementById('register-email');
        const privacyPolicy = document.getElementById('privacy-policy');

        let valid = true;

        if (password.value !== passwordConfirm.value) {
            password.classList.add('is-invalid');
            passwordConfirm.classList.add('is-invalid');
            valid = false;
        } else {
            password.classList.remove('is-invalid');
            passwordConfirm.classList.remove('is-invalid');
        }

        if (!privacyPolicy.checked) {
            privacyPolicy.classList.add('is-invalid');
            valid = false;
        } else {
            privacyPolicy.classList.remove('is-invalid');
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email.value)) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (valid) {
            alert('Registrering fuldført!');
            overlay.style.display = 'none';
        }
    });
});

$(document).ready(function() {
    $('.btn-login').click(function() {
        $('.overlay').fadeIn();
        $('.login-container').addClass('active');
        $('.register-container').removeClass('active');
    });

    $('.btn-register').click(function() {
        $('.overlay').fadeIn();
        $('.register-container').addClass('active');
        $('.login-container').removeClass('active');
    });

    $('.close-btn').click(function() {
        $('.overlay').fadeOut();
    });

    $('.toggle-btn').click(function(e) {
        e.preventDefault();
        $('.form-container').toggleClass('active');
    });

    $('#login-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        if ($('#login-username').val().trim() === '') {
            isValid = false;
            $('#login-username').addClass('input-error');
            $('#login-username-error').show();
        } else {
            $('#login-username').removeClass('input-error');
            $('#login-username-error').hide();
        }

        if ($('#login-password').val().trim() === '') {
            isValid = false;
            $('#login-password').addClass('input-error');
            $('#login-password-error').show();
        } else {
            $('#login-password').removeClass('input-error');
            $('#login-password-error').hide();
        }

        if (isValid) {

        }
    });

    $('#register-form').submit(function(e) {
        e.preventDefault();
        let isValid = true;

        if ($('#register-username').val().trim() === '') {
            isValid = false;
            $('#register-username').addClass('input-error');
            $('#register-username-error').show();
        } else {
            $('#register-username').removeClass('input-error');
            $('#register-username-error').hide();
        }

        if (!validateEmail($('#register-email').val().trim())) {
            isValid = false;
            $('#register-email').addClass('input-error');
            $('#register-email-error').show();
        } else {
            $('#register-email').removeClass('input-error');
            $('#register-email-error').hide();
        }

        if ($('#register-password').val().trim() === '') {
            isValid = false;
            $('#register-password').addClass('input-error');
            $('#register-password-error').show();
        } else {
            $('#register-password').removeClass('input-error');
            $('#register-password-error').hide();
        }

        if ($('#register-password').val().trim() !== $('#register-password-confirm').val().trim()) {
            isValid = false;
            $('#register-password-confirm').addClass('input-error');
            $('#register-password-confirm-error').show();
        } else {
            $('#register-password-confirm').removeClass('input-error');
            $('#register-password-confirm-error').hide();
        }

        if (!validatePhone($('#register-phone').val().trim())) {
            isValid = false;
            $('#register-phone').addClass('input-error');
            $('#register-phone-error').show();
        } else {
            $('#register-phone').removeClass('input-error');
            $('#register-phone-error').hide();
        }

        if (!$('#register-privacy').is(':checked')) {
            isValid = false;
            $('#register-privacy').addClass('input-error');
            $('#register-privacy-error').show();
        } else {
            $('#register-privacy').removeClass('input-error');
            $('#register-privacy-error').hide();
        }

        if (isValid) {

        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^\+?[0-9]{1,4}?[-.●]?[0-9]{3,14}$/;
        return re.test(phone);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const countryCodeInput = document.getElementById('register-country-code');
    const phoneNumberInput = document.getElementById('register-phone-number');

    countryCodeInput.addEventListener('input', function () {
        if (countryCodeInput.value.trim() !== '') {
            phoneNumberInput.classList.add('enabled');
            phoneNumberInput.removeAttribute('disabled');
        } else {
            phoneNumberInput.classList.remove('enabled');
            phoneNumberInput.setAttribute('disabled', 'true');
        }
    });

    countryCodeInput.value = '';
});
