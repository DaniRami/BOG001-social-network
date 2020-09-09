import { watcher } from "../FireFunctions/signOut.js";
import {loginGoogle,loginWithEmail} from "../FireFunctions/signInEmailGoogle.js";
import { router } from "../router.js";
import { loadModal, closeModal } from "../component/modal.js";

export const LoginWithEmailAndPassword = async (event) => {
  event.preventDefault();
  let loginEmail = document.getElementById("emailLogin").value;
  let loginPass = document.getElementById("passLogin").value;
  let statusLogin = await loginWithEmail(loginEmail, loginPass);
  loadModal(statusLogin.title, statusLogin.message);

  if (statusLogin.title === "Bienvenido") {
    await watcher();
    history.pushState("#wall", "", "#wall")    
    router("#wall");
  } else {
    console.error("error");
  }
};

const googleWallLogin = async (event) => {
  event.preventDefault();
  let statusGoogle = await loginGoogle();
  loadModal(statusGoogle.title, statusGoogle.message);
  if (statusGoogle.status === true) {
    await watcher();
    await router("#wall");
  } else {
    console.error("error");
  }
};

export const RedirectToRegister = () => {
  history.pushState("#register", "", "#register");
  router("#register"); 
};

export const loginComponent = {
  render: async () => {
    const view = `
      <div class='box-login'>
       <div class="TechMeLogin"> <h1 class="techLogin"> | Tech<span class="MeLogin">Me</span> </h1> </div>
      <div class="WelcomeLogin"> <h2 class="greenTex">¡Únete a Nuestra Red Social de Developers!</h2></div>
       <div class="google">
       <img class="icono" src="img/google.png" alt="google">
       <a href= ""  type= "button"  id="loginGoogleid"  class="btn1">ingresa con google</a>
       </div>
       
      <div class="FormLogin">
      <div class="box-form">
      
      <form>
       
      <input class="InputLogin" type="email" id="emailLogin" placeholder="Ingresa tu email" required>
      <input class="InputLogin" type="password" name="password" id="passLogin" placeholder="Ingresa tu contraseña" required>
      </form>
      </div>
      <div class = "actionsLogin">


      <a class="btn2"  type= "button"  id="userRegister">crear tu cuenta</a>



      <input type="button" class="loginButton" id="loginButton" value="ENTRAR"/>
      </div> 
      </div>
      <img class="Img"  src="img/people.jpg "  alt="people">
      </div> 
        `;
    return view;
  },
  
  afterRender: async () => {
    let loginGoogleItem = document.getElementById("loginGoogleid");
    loginGoogleItem.addEventListener("click", googleWallLogin);
    let loginEmail = document.getElementById("loginButton");
    loginEmail.addEventListener("click", LoginWithEmailAndPassword);
    let userRegister = document.getElementById("userRegister");
    userRegister.addEventListener("click", RedirectToRegister);
  },
};
