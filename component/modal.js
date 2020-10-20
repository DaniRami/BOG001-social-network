import { post } from "../FireFunctions/createPost.js";
import { loadPost } from "../wall/wall.js";
 

export const loadModal = (title,message,isForm = false) => {

  document.getElementById("headerModal").innerText = title;
  if(!isForm){
    document.getElementById("formModal").style.display = "none"
    document.getElementById("messageModal").style.display = "block"
    document.getElementById("messageModal").innerText = message;
  }else{
    postModal()
  }
  let modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

export const closeModal = () => {
let CLOSE =  document.getElementById("myModal");
CLOSE.style.display = "none";
}

const postModal = () => {
  document.getElementById("messageModal").style.display = "none";
  let form = document.getElementById("formModal");
  form.style.display = "block"
}

const savePost = async (event) =>{
  // event.preventDefaul();
  let title = document.getElementById("textTitle").value;
  let idea = document.getElementById("textPost").value;
  await post( title, idea);
  loadPost()
  loadModal("Post", "Compartiste tu idea exitosamente")
}
 
export const windowModal = { 
  render: async () => {
   let view = `<div class="modal-content"> 
   <header class="modal-header" id="closeModal">
     <h2 id="headerModal"></h2>
     <span id="closeButton" class="close">&times;</span>
    </header>
    <article id="bodyModal" class="modal-body"> 
     <section class="contentElement" id="contentElement">
        <h3 class="messageModal" id="messageModal"></h3>
        <div class="formModal" id="formModal">
        <input class="Inputtitle" type="texto" id="textTitle" placeholder="Ingresa tu titulo">
        <input class="Inputtexto" type="texto"  id="textPost" placeholder="Escribe tu idea...">       
        <button class="btnsave" id="btnsave">Publicar</button>
        </div>
     </section>
  </article>
    </div>
     `
     document.getElementById("myModal").innerHTML = view;
  },
  afterRender: () => {
    document.getElementById("closeButton").addEventListener('click',closeModal)
    document.getElementById("btnsave").addEventListener('click',savePost)
  } 
}
     


  