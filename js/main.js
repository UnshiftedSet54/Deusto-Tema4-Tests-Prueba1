const addUser = () => {
  document.querySelector('form').onsubmit = e => e.preventDefault()

  let messageElement = document.querySelector('#message')
  const email = document.querySelector('#email')
  const password = document.querySelector('#password')
  const repeatPassword = document.querySelector('#repeatPassword')

  const user = {
    email: email.value,
    password: password.value,
    repeatPassword: repeatPassword.value
  }

  email.value = ''
  password.value = ''
  repeatPassword.value = ''
  messageElement.innerText = ''

  if(user.email === '' | user.password === '' | user.repeatPassword === '') {
    return messageElement.innerText = 'Error: verifique que los campos estan completos'
  }

  if((/^\S+@\S+\.\S+$/).test(user.email) === false) {
    return messageElement.innerText = 'Error: ingresar un correo electronico valido'
  }

  if((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/).test(user.password) === false) {
    return messageElement.innerText = 'Error: ingresar contrasena valida'
  }

  if(user.password !== user.repeatPassword) {
    return messageElement.innerText = 'Error: ambas contrasena deben coincidir'
  }

  messageElement.innerText = 'Usuario anadido exitosamente'
}

