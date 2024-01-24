const signupLink = document.querySelector('#signup-link');
const loginLink = document.querySelector('#login-link');
const signUpForm = document.querySelector('.form-container__signup');
const loginForm = document.querySelector('.form-container__login');

signupLink.addEventListener('click', () => {
    document.querySelector('#login-form').classList.add('hidden');
    document.querySelector('#signup-form').classList.remove('hidden');
}