const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form__input');
const loginSpan = document.querySelector('#login-form__title');
const todoForm = document.querySelector('#todo-form');

const USERNAME_KEY = 'username';
const HIDDEN_CLASSNAME = 'hidden';

function hiddenFn() {
  loginSpan.classList.toggle(HIDDEN_CLASSNAME);
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  todoForm.classList.toggle(HIDDEN_CLASSNAME);
}

function onLoginSubmit(info) {
  info.preventDefault();
  const userName = loginInput.value;
  loginSpan.innerText = `반갑습니다! ${userName}님!\n오늘도 즐거운 하루 되세요!`;
  hiddenFn();
  localStorage.setItem(USERNAME_KEY, userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  hiddenFn();
  loginSpan.innerText = `반갑습니다! ${savedUserName}님!\n오늘도 즐거운 하루 되세요!`;
}
