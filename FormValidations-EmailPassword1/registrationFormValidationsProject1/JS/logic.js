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
  if (!passwordInput.value.trim())
    flashMessage(passwordInput, 'invalid password!!');

  const areEmailsValid = validateEmail1(emailInput.value.trim());
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

const validateEmail1 = checkEmail1 => {
  return checkEmail1.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const validateEmail2 = checkEmail2 => {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(checkEmail2).toLowerCase());
};
