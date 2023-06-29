/* eslint-disable linebreak-style */
const hamburgertoggle = document.querySelector('#hamburger-toggle');
const navbar = document.querySelector('#menulist');
const menu = document.querySelector('#menuicon');
const close = document.querySelector('#closeicon');
const logo = document.querySelector('.mylogo');
const navitems = document.querySelectorAll('.navlink');

function onhamburgerclick(event) {
  menu.classList.add('hidden');
  logo.classList.add('offlogo');
  event.preventDefault();
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open');
    close.classList.add('hide');
  } else if (navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    menu.classList.remove('hidden');
    logo.classList.remove('offlogo');
    navbar.classList.remove('exit');
    close.classList.remove('hide');
  }
}
hamburgertoggle.addEventListener('click', onhamburgerclick);
navitems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.add('exit');
    menu.classList.remove('hidden');
    logo.classList.remove('offlogo');
    close.classList.remove('hide');
  });
});

// FORM VALIDATION;

// const errorMessage = document.querySelector('#form-validity');
const userNameE = document.querySelector('#myName');
const form = document.querySelector('#myForm');
const emailAdress = document.querySelector('#myEmail');
// const errorPopup = 'Your Email Should be in Lower Case';

const checkUsername = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const username = userNameE.value.trim();

  if (!isRequired(username)) {
      showError(userNameE, 'Username cannot be blank.');
  } else if (!isBetween(username.length, min, max)) {
      showError(userNameE, `Username must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(userNameE);
      valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailAdress.value.trim();
  if (!isRequired(email)) {
      showError(emailAdress, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
      showError(emailAdress, 'Email is not valid.')
  } else {
      showSuccess(emailAdress);
      valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  // validate fields
  let isUsernameValid = checkUsername(),
      isEmailValid = checkEmail();
      
  let isFormValid = isUsernameValid &&
      isEmailValid;
    
  // submit to the server if the form is valid
  if (isFormValid) {

  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
      // cancel the previous timer
      if (timeoutId) {
          clearTimeout(timeoutId);
      }
      // setup a new timer
      timeoutId = setTimeout(() => {
          fn.apply(null, args)
      }, delay);
  };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
      case 'myName':
          checkUsername();
          break;
      case 'myEmail':
          checkEmail();
          break;
  }
}));



