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

  // checks if email is empty and displays message if email is empty
  if (!email.value.trim()) flashMessage(email, 'email is really required!!');

  // checks if email is invalid and displays message if email is invalid
  const isEmailValid = validateEmail2(email.value.trim());
  if (!isEmailValid && email.value.trim())
    flashMessage(email, 'Hey! invalid email!!');

  // checks if email is valid and displays message if email is valid
  const isEmailValid2 = validateEmail2(email.value.trim());
  if (isEmailValid2 && email.value.trim())
    flashMessage(email, 'Looking good! email is valid!!');

  // checks if password is empty and displays message if password is empty
  if (!password.value.trim())
    flashMessage(password, 'Hey! password is empty!!');

  // checks if password is less than 10 characters and displays message if password is less than 10 characters
  if (
    !password.value.trim().length < 10 &&
    email.value.trim() &&
    password.value.trim()
  ) {
    flashMessage(password, 'Hey! password must be at least 10 characters!!');
  }
  // checks if confirm password matches password and checks if confirm password is empty and displays message if confirm password does not match
  if (
    password.value.trim() !== confirmPassword.value.trim() &&
    confirmPassword.value.trim()
  ) {
    flashMessage(confirmPassword, 'Hey! confirm password does not match!!');
  }
  // checks if confirm password is empty and displays message if confirm password is empty
  if (!confirmPassword.value.trim())
    flashMessage(confirmPassword, 'Hey! confirm password is empty!!');
});
// flash message for closet div
const flashMessage = (element, message) => {
  const msg = element.closest('div').previousElementSibling;
  msg.textContent = message;
  msg.style.visibility = 'visible';

  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
};
// checks if email is valid using regex
const validateEmail2 = checkEmail2 => {
  var re = /\S+@\S+\.\S+/;
  return re.test(String(checkEmail2).toLowerCase());
};

// const validateEmail1 = checkEmail1 => {
//   return checkEmail1.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   );
// };
