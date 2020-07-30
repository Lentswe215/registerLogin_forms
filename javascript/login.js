let users = [
  {
    firstname: "John",
    lastname: "Doe",
    username: "John_Doe",
    email: "ephraim@gmail.com",
    password: "Abc@1234",
  },
];

console.log('I am visible')
let message_text = "";
let status = "";

function login() {
  const username = document.getElementById("usernametxt").value;
  const password = document.getElementById("passwordtxt").value;
  const messages = document.getElementById("messages");
  const usernameMessages = document.getElementById("username_messages");
  const passwordMessages = document.getElementById("password_messages");
  if (
    username.match(/\S.{4,}/g) &&
    password.match(/.{8,}/g) &&
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[0-9]/g) &&
    password.match(/[@#\$\%\^\&\*\(\)\_\+\=\\\[\]\{\}\;\:\\\/\.\,\,\<\>]/g)
  ) {
    if (!usernameMessages.className.match(/hide/g)) {
      usernameMessages.classList.toggle("hide");
    } else if (!passwordMessages.className.match(/hide/g)) {
      passwordMessages.classList.toggle("hide");
    }

    passwordMessages.innerHTML = "";
    usernameMessages.innerHTML = "";
    messages.innerHTML=""
    for (let i = 0; i < users.length; i++) {
      status = ''
      message_text = ''
      if (username == users[i].username && password == users[i].password) {
        message_text += "You are logged in!";
        status += "success";

        setTimeout(() => {
          window.location.href='./index.html?=slogged_in'
        }, 700);
      } else {
        message_text += "Access denied";
        status = "danger";
      }
    }
    if(messages.className.match('alert-success') == true){
      messages.classList.remove('alert-success')
    messages.classList.add(`alert-${status}`);
    } else {
      messages.classList.remove('alert-danger');
      messages.classList.add(`alert-${status}`)

    }
    messages.innerHTML = message_text;
  } else {
    if (!username.match(/\S.{4,}/g)) {
      usernameMessages.innerHTML =
        "Username should have more than 3 characters";
      usernameMessages.classList.remove("hide");
    }

    if (!password.match(/[a-z]/g)) {
      passwordMessages.innerHTML = "Should have at least 1 lowercase";
      passwordMessages.classList.remove('hide')
    }
    if (!password.match(/[A-Z]/g)) {
      passwordMessages.innerHTML = "Should have at least 1 uppercase";
      passwordMessages.classList.remove('hide')
    }
    if (!password.match(/[0-9]/g)) {
      passwordMessages.innerHTML = "Should have at least 1 number";
      passwordMessages.classList.remove('hide')
    }
    if (
      !password.match(/[@#\$\%\^\&\*\(\)\_\+\=\\\[\]\{\}\;\:\\\/\.\,\,\<\>!]/g)
    ) {
      passwordMessages.innerHTML = "Should have at least 1 special character";
      passwordMessages.classList.remove('hide')
    }
    if (!password.match(/.*.{7,}/g)) {
      passwordMessages.innerHTML = "Should be more than 7 character";
      passwordMessages.classList.remove('hide')
    }
    // setTimeout(() => {
    //   location.reload();
    // }, 1500);
  }
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}
