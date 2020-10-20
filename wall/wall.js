import { signOutUser } from "../FireFunctions/signOut.js"
import { router } from "../router.js";
import { loadModal } from "../component/modal.js";
import { paintpost, post } from "../FireFunctions/createPost.js";
import { postItem } from "./itemPost.js";

const ideaModal = (event) =>{
 event.preventDefault();
 loadModal(" Crear Publicación","",true);
}

const leave =  async(event) => {
  event.preventDefault();
  await signOutUser();
   await router("#/login");
  console.log("nos vamos :-(");
}
 
export const loadPost = async () => {
  let posts = await paintpost()
  let principal = document.getElementById("container-post")
  principal.innerHTML = ""
  posts.forEach((postElement) => {
   let component = postItem.render(postElement.data());
   let newElement = document.createElement("div")
   newElement.innerHTML = component
   principal.appendChild(newElement);
  });
}
export const wallView = {

  render: async () => {
    let content = document.getElementById("root");
    content.innerHTML = "";
    const view = `
    
  <header class="header">
    <div class="TechMewall"> <h1 class="techwall"> | Tech<span class="Mewall">Me</span> </h1> </div>
    <a href= "" class="btnOutWall"  type= "button"  id="btnOutWall">Salir</a> 
    <a href= "" class= "btnWallWall"  type= "button"  id="btnWallWall">wall</a> 
    
  </header>
    
  <main>
    
  <div class="LINK">
  <a href= "" class="idea"  type= "button"  id="idea">Comparte la idea de tu proyecto</a> 
  </div>
  
  <div id="container-post"></div> 
  
  
  
  </main>
  
    <footer class="footer">
    <div class="icon">
    <a href="https://git-scm.com/doc" id="git" target="_blank"><img src="img/git.png" alt="icono de git" class="git"></a>
    <a href="https://jestjs.io/docs/es-ES/getting-started" id="jest" target="_blank"><img src="img/jest.png" alt="icono de jest" class="jest"></a>
   <a href="https://developer.mozilla.org/es/" id="mdn" target="_blank"><img src="img/mdn.png" alt="icono de mdn" class="mdn"> </a>
  </div>
  <p class="nombres">&copy; Blanca Arteaga - Caro Suáres y Daniela Ramirez - 2020</p>
  </footer>
    `

    return view;
  },
  afterRender: () => {
  document.getElementById("idea").addEventListener("click", ideaModal);
  //document.getElementById("btnWallWall").addEventListener("click", () => {});
  document.getElementById("btnOutWall").addEventListener("click", leave)
  

//     let btnEditWall = document.getElementById("btnEditWall");
//     btnEditWall.addEventListener("click", () => {
//       console.log("editando")
// });
//     let btnEraseWall = document.getElementById("btnEraseWall");
//     btnEraseWall.addEventListener("click", () => {
//       console.log("borrando")
// });
 },

};
