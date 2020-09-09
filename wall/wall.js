
import { signOutUser } from "../FireFunctions/signOut.js";
import { router } from "../router.js";
import { loadModal } from "../component/modal.js";
import { paintpost, post } from "../FireFunctions/createPost.js";
import { postItem } from "./itemPost.js";

const ideaModal = (event) => {
  event.preventDefault();
  loadModal(" Crear Publicación", "", true);
  document.getElementById("content").classList.add("ModalContent");
  document.getElementById("closeModal").classList.add("headerPublicacion");
  document.getElementById("formModal").classList.add("modalPubicacion");
};

const leave = async (event) => {
  event.preventDefault();
  await signOutUser();
  history.replaceState("#login", "", "#login");
  router("#login");
  


  console.log("nos vamos :-(");
};

export const loadPost = async () => {
  let posts = await paintpost();
  let principal = document.getElementById("container-post");
  principal.innerHTML = "";
  posts.forEach( async (postElement) => {
    let component = await postItem.render(postElement.id, postElement.data());
    let newElement = document.createElement("div");
    newElement.innerHTML = component;
    principal.appendChild(newElement);
    await postItem.afterRender(postElement.id);
    
  });
};

export const wallView = {
  render: async () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
    const view = `

  <div class="wall-container">
  <header class="headerWall">
    <div class="TechMewall"> <h1 class="techwall">| Tech<span class="Mewall">Me</span>     </h1></div>
    
    <a href= "" class= "btnWallWall"  type= "button"  id="btnWallWall">muro</a> 
    <a href= "" class="btnOutWall"  type= "button"  id="btnOutWall">salir</a> 
    <div class="LINK">
    <a href= "" class="ideaWall"  type= "button"  id="idea">Comparte la idea de tu proyecto</a> 
    </div>
  </header>
    
  <main class="mainWall">
    
    
    
    <div id="container-post"></div> 
  
  </main>
  
  <footer class="footerWall">
    <div class="icon">
      <a href="https://git-scm.com/doc" id="git" target="_blank"><img src="img/git.png" alt="icono de git" class="git"></a>
      <a href="https://jestjs.io/docs/es-ES/getting-started" id="jest" target="_blank"><img src="img/jest.png" alt="icono de jest" class="jest"></a>
      <a href="https://developer.mozilla.org/es/" id="mdn" target="_blank"><img src="img/mdn.png" alt="icono de mdn" class="mdn"> </a>
    </div>
    <p class="nombres">&copy; Blanca Arteaga - Caro Suárez y Daniela Ramirez - 2020</p>
  </footer>
  </div>`;

    return view;
  },
  afterRender: () => {
    document.getElementById("idea").addEventListener("click", ideaModal);
    document.getElementById("btnOutWall").addEventListener("click", leave);

 },
};
