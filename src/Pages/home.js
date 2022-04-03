import { signIn } from '../firebase/authetication.js';

export default () => {
  const container = document.createElement('div');
  container.classList.add('containerA');

  const templateHome = `
  
  <div class=banner> 
    
  </div>
  <div class= main-container>
       <div class="container-fluid">
      <p class="wellcome"> Bem vindo(a) viajante!! </p>
      <form action="#" id="sign-in-form" class="sign-in-form">
        <input class= "inputs" type="email" placeholder="Email" id="email" />
        <input class= "inputs" type="password" placeholder="Senha" id="password"/>
        <input class="btnEnter" type="submit" value="Entrar" id="Entrar"/>
      </form>
      <p class="enterByGoogle">Ou entre com o Google</p>
     <a href="/" class="google-link">
       <img  class="logoGoogle" src="./img/google.png" alt="logo Google">
     </a>
       <p class="welcome"> Ainda não tem cadastro?> </p>
       <a href="#register" id='sign-up-google'class="link">Registre-se</a></p>  
     </div>  
  </div>
  `;
  container.innerHTML = templateHome;
  const form = container.querySelector('.sign-in-form');
  form.addEventListener('submit', (e) => {
    // e - comportamento padrão daquele evento
    e.preventDefault(); //prevenir comportamento padrão
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signIn(email, password);
  });
  return container;
};
