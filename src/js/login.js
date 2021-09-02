const email = document.getElementById('email');
const password = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');

const corsDef = {
   method: "GET",
   mode: "cors",
   cache: "default",
};

btnLogin.addEventListener('click', async() => {
   const loginValidation = await fetch(`http://localhost:3000/login/${email.value}/${password.value}`)
   console.log(loginValidation.body.response);
})