const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector(".todo_input");
const todoList = document.querySelector("#todo-list");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // username 저장
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);


}


function paintGreetings(username) {
  loginInput.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username} 👩🏻‍💻`; 
  greeting.classList.remove(HIDDEN_CLASSNAME);

  todoForm.classList.remove(HIDDEN_CLASSNAME);
  todoInput.classList.remove(HIDDEN_CLASSNAME);
  todoList.classList.remove(HIDDEN_CLASSNAME);
}

// username 유저 정보 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}