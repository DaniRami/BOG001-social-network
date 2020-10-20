import { post } from "../FireFunctions/createPost.js";
import { loadPost } from "../wall/wall.js";


let form;

export const loadModal = (title,message,isForm = false) => {

  document.getElementById("headerModal").innerText = title;
  if(!isForm){
    document.getElementById("content").classList.remove("ModalContent")
    form = document.getElementById("formModal").style.display = "none";
    document.getElementById("messageModal").style.display = "block";
    document.getElementById("messageModal").innerText = message;
  }else{
    postModal();
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
  form = document.getElementById("formModal").style.display = "block";
}

const savePost = async () =>{
  // event.preventDefaul();
  let idea = document.getElementById("textPost").value;
  await post(idea);
  loadPost();
  loadModal("Post", "Compartiste tu idea exitosamente");
  document.getElementById("textPost").value = "Escribe aquí tu idea...";
}
 
export const windowModal = { 
  render: async () => {
   let view = `<div id="content" class="modal-content"> 
   <header class="modal-header" id="closeModal">
     <h2 id="headerModal"></h2>
     <span id="closeButton" class="close">&times;</span>
    </header>
    <article id="bodyModal" class="modal-body"> 
     <section class="contentElement" id="contentElement">
        <h3 class="messageModal" id="messageModal"></h3>
        <div id="formModal">
       <textarea name=""class="Inputtexto" id="textPost" cols="" rows="5">Escribe aquí tu idea...</textarea>
        <button class="btnsave" id="btnsave">Publicar</button>
        </div>
     </section>
  </article>
    </div>
     `
     document.getElementById("myModal").innerHTML = view;
  },
  afterRender: () => {
    document.getElementById("closeButton").addEventListener('click',closeModal);
    document.getElementById("btnsave").addEventListener('click',savePost);
  } 
}
     


  