let users = [
  {
    firstname: "Ephraim",
    lastname: "Mamonong",
    username: "zicso",
    email: "ephraim@gmail.com",
    password: "Abc@1234",
  },
];
let message_text = "";
let status = "";

function register() {
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const username = document.getElementById("uname").value;
  const email = document.getElementById("email_textbox").value;
  const password = document.getElementById("pass_txt").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const messages = document.getElementById("messages");
  const firstnameMessages = document.getElementById("firstnameMessages");
  const lastnameMessages = document.getElementById("lastnameMessages");
  const usernameMessages = document.getElementById("usernameMessages");
  const emailMessages = document.getElementById("emailMessages");
  const passwordMessages = document.getElementById("passwordMessages");
  const cPasswordMessages = document.getElementById("cPasswordMessages");

  if (
    firstName.length > 1 &&
    lastName.length > 1 &&
    username.length > 3 &&
    email.match(/\S+@\S+\.\S+/g) &&
    password.match(/[a-z]/g) &&
    password.match(/[A-Z]/g) &&
    password.match(/[0-9]/g) &&
    password.match(/[@#\$\%\^\&\*\(\)\_\+\=\\\[\]\{\}\;\:\\\/\.\,\,\<\>]/g)&&
    confirmPassword === password
  ) {
    let user = {
      firstname: firstName,
      lastname: lastName,
      username: username,
      email: email,
      password: password,
    };
    passwordMessages.innerHTML = "";
    usernameMessages.innerHTML = "";
    emailMessages.innerHTML = "";
    messages.innerHTML = `Your account has been registered`;
    messages.classList.add('alert-success')

    setTimeout(() => {
        window.location.href='./login.html';
          }, 300);

  } else {
    if (!firstName.match(/\w.{1,}/g)) {
      firstnameMessages.innerHTML = "Enter your first name";
      firstnameMessages.classList.remove('hide')
    }
    if (!lastName.match(/\w.{1,}/g)) {
      lastnameMessages.innerHTML = "Enter your last name";
      lastnameMessages.classList.remove('hide')
    }
    if (!username.match(/\w.{3,}/g)) {
      usernameMessages.innerHTML = "User name should have more 3 characters";
      usernameMessages.classList.remove('hide')
    }
    if (!email.match(/\S+@\S+\.\S+/g)) {
      emailMessages.innerHTML = "Enter correct email";
      emailMessages.classList.remove('hide')
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

    if(confirmPassword !== password)  {
      cPasswordMessages.innerHTML = "Password don't match";
      cPasswordMessages.classList.remove('hide')
    }
    setTimeout(() => {
      location.reload()
    }, 2500);
  }
}
