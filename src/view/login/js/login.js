const email = document.querySelector('#email');
const password = document.querySelector('#password');
const btnLogin = document.querySelector('#btnLogin');

btnLogin.addEventListener('click', async () => {

   console.log(`Box Email = ${email.value} e box Password = ${password.value}`);

   const requestDetails = {
      method: 'POST',
      mode: 'no-cors',
      body: {
         'email': email.value,
         'password': password.value,
      },
      headers: { 'content-type': 'application/json'},
   }

   console.log(requestDetails);

   try {
      await fetch('http://localhost:3000/login', requestDetails)

      //if (!result.success)
         //return window.alert(result.error);

      //window.alert(result.success);
      //window.location.replace('https://livrados.vercel.app');

   } catch (err) {
      console.log("Erro ao acessar endpoint de login : " + err)
   }
   //.then(res => res.json())
   //.then(data => { console.log(data)});

});


