// const fs = require("fs");
let users = [
  {
    firstname : 'Ephraim',
    lastname: 'Mamonong',
    username:'zicso',
    email: 'ephraim@gmail.com',
    password: 'Abc@1234'
  }
]

console.log(users)

function register () {
  const firstName = document.getElementById('fname').value
  const lastName = document.getElementById('lname').value
  const username = document.getElementById('uname').value
  const email = document.getElementById('user_email').value
  const password = document.getElementById('pass_txt').value


  if (username.match(/.{3,}/g) ) {
    if(email.match(/\S+@\S+\.\S+/g)){
      
      if(password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      password.match(/[@#\$\%\^\&\*\(\)\_\+\=\\\[\]\{\}\;\:\\\/\.\,\,\<\>]/g)){
        let user = {
          firstname: firstName,
          lastname: lastName,
          username:username,
          email:email,
          password: password 
      }

      console.log(user)
      users.push(user)
      } else {
        passwordMessages.innerHTML = 'Your password must at least have uppercase, lowercase, number and special character'
      }
      } else {
        emailMessages.innerHTML ='Enter correct email'
      }
  } else {
    usernameMessages.innerHTML= "username should be more than 3 characters"
  }

}
  

function login () {
  const username = document.getElementById('usernametxt').value
  const password = document.getElementById('passwordtxt').value
  const messages = document.getElementById('messages')
  const usernameMessages = document.getElementById('username_messages')
  const passwordMessages = document.getElementById('password_messages')


  

  if (username.match(/\S.{3,}/g)) {
    if (password.length >= 7) {
      if (
        password.match(/[a-z]/g) &&
        password.match(/[A-Z]/g) &&
        password.match(/[0-9]/g) &&
        password.match(/[@#\$\%\^\&\*\(\)\_\+\=\\\[\]\{\}\;\:\\\/\.\,\,\<\>]/g)
      ) {
        for (let i = 0; i < users.length; i++) {
          if (
            username == users[i].username &&
            password == users[i].password
          ) {
            messages.classList.toggle('success')
            messages.innerHTML = 'You are logged in!'
            return
          }
        } 
          messages.classList.toggle('error')
          messages.innerHTML = 'Access Denied!'
       
      } else {
        passwordMessages.innerHTML = 'Your password must at least have uppercase, lowercase, number and special character'
      }
    } else {
      passwordMessages.innerHTML = 'Your password must be more than 7 characters'
    }
  } else {
    usernameMessages.innerHTML = 'Username should be more than 3 characters'
  }

 let inputs = document.querySelectorAll('input');
 inputs.forEach(input => input.value ='');
}
