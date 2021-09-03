const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async() => {

   const parameters = new URLSearchParams();
   //parameters.append('nome', 'Bruno');
   parameters.append('email', email.value);
   parameters.append('password', password.value);

   const requestDetails = { 
      method: 'POST',
      headers: new Headers({
          'Accept': 'application/json'
      }),
      body: parameters
   }

   let tryLogin = await fetch(`http://localhost:3000/login`, requestDetails);
   let result = await tryLogin.json();

   if (!result.success)
      return window.alert(result.error)

      window.alert(result.success);
      window.location.replace('https://livrados.vercel.app');

   //.then(res => res.json())
   //.then(data => { console.log(data)});

});


