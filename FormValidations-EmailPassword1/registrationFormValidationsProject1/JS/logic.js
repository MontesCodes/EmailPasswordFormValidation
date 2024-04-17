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

  if (!emailInput.value.trim()) flashMessage(emailInput, 'email is required!!');
  if (!passwordInput.value.trim())
    flashMessage(passwordInput, 'password is required!!');

  const areEmailsValid = validateEmail2(emailInput.value.trim());
  if (!areEmailsValid && emailInput.value.trim())
    flashMessage(emailInput, 'invalid email!!');
});

signupForm.addEventListener('submit', events => {
  events.preventDefault();
  const email = signupForm.querySelector('#signup-email');
  const password = signupForm.querySelector('#signup-password');
  const confirmPassword = signupForm.querySelector('#signup-confirm-password');

  if (!email.value.trim()) flashMessage(email, 'email is really required!!');

  const isEmailValid = validateEmail2(email.value.trim());
  if (!isEmailValid && email.value.trim())
    flashMessage(email, 'Hey! invalid email!!');

  if (!password.value.trim())
    flashMessage(password, 'Hey! password is empty!!');

  if (
    !password.value.trim().length < 10 &&
    email.value.trim() &&
    password.value.trim()
  )
    flashMessage(password, 'Hey! password must be at least 10 characters!!');
});

const flashMessage = (element, message) => {
  const msg = element.closest('div').previousElementSibling;
  msg.textContent = message;
  msg.style.visibility = 'visible';

  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
};

const validateEmail2 = checkEmail2 => {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(checkEmail2).toLowerCase());
};

// const validateEmail1 = checkEmail1 => {
//   return checkEmail1.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   );
// };
