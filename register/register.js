import {createUser} from "/FireFunctions/createUser.js";
import { loadModal, closeModal } from "../component/modal.js";
import {signOutUser} from "/FireFunctions/signOut.js";
import {router} from "../router.js";

export const userRegister = async (event) => {
  event.preventDefault();
  let userEmail = document.getElementById("emailRegister").value;
  let userPassword = document.getElementById("passRegister").value;
  let statusRegister = await createUser(userEmail, userPassword);
  loadModal(statusRegister.title, statusRegister.message);
  
}

export const registerView = { 

  render: async ()=> {
      const view =
     `
     
    <div class="box-register">
     
      <img class="imgRegister" src="../img/fondo.jpg">
      
      <div class="box-register-2"></div>
        <div class="techMeRegister"><h1 class="tech"> |Tech<span class="me">Me</span></h1>
        </div> 
        <div class="welcomeTextRegister">
          <p class="blueText">¡Bienvenid@!</p>
          <p class="blueText">Completa el formulario con tu información para crear tu cuenta:</p>
        </div>
      
      
      <div class="box-register-3"></div>
            <form class="formRegister">
                <input class="inputRegister" type="text" id="nameRegister" placeholder="  Nombre">
                <input class="inputRegister" type="text" id="nickNameRegister" placeholder="  Nick Name">
                <input class="inputRegister" type="email" id="emailRegister" placeholder="  Correo Electrónico">
                <input class="inputRegister" type="password" id="passRegister" placeholder="  Crea tu contraseña">
                <p class="termsText"> Al registrarte aceptas nuestros términos y condiciones</p>
                <button id="btnRegister">REGISTRARME</button>
              </form>
      
      
      <div class="box-register-4"></div>

      
    </div>`
      
      return view;
      },

  afterRender: ()=> {
      let btnRegister = document.getElementById("btnRegister");
      btnRegister.addEventListener("click", userRegister);
      

      
    }  
}