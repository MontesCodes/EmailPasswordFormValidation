const signUpLink = document.querySelector('#signup-link');
const logInLink = document.querySelector('#login-link');
const signUpForm = document.querySelector('.form-repository__signup');
const logInForm = document.querySelector('.form-repository__login');

signUpLink.addEventListener('click', () => {
  signUpForm.classList.remove('hide');
  logInForm.classList.add('hide');
});
logInLink.addEventListener('click', () => {
  signUpForm.classList.add('hide');
  logInForm.classList.remove('hide');
});
