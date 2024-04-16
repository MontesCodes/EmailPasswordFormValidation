const signUpLink = document.querySelector('#signup-link');
const logInLink = document.querySelector('#login-link');
const signUpFormRepository = document.querySelector('.form-repository__signup');
const logInFormRepository = document.querySelector('.form-repository__login');

const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');

signUpLink.addEventListener('click', () => {
  signUpFormRepository.classList.remove('hide');
  logInFormRepository.classList.add('hide');
});

logInLink.addEventListener('click', () => {
  signUpFormRepository.classList.add('hide');
  logInFormRepository.classList.remove('hide');
});

loginForm.addEventListener('submit', events => {
  events.preventDefault();
  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#password');

  if (!emailInput.value.trim()) flashMessage(emailInput, 'invalid email!!');
});

const flashMessage = (element, message) => {
  const msg = element.closest('div').previousElementSibling;
  // console.log(msg);
  msg.textContent = 'invalid email!!';
  msg.style.visibility = 'visible';

  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
};
