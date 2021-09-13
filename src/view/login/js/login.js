const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', async () => {

   const requestDetails = {
      method: 'POST',
      body: JSON.stringify({
         email: email.value,
         password: password.value
      }),
      headers: { 'Content-Type': 'application/json'},
   }

   try {
      await fetch('http://localhost:3000/login', requestDetails)
      .then(res => (res.json()))
      .then(data => {
         if (data.error)
            return window.alert(data.error);

         if (data.success) {
            window.alert(data.success);
            window.location.replace('https://livrados.vercel.app');
         }

      });

   } catch (err) {
      console.log("Erro ao acessar endpoint de login : " + err);
   }

});


