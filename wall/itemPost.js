export const postItem = { 
    render: (data) => {
     let view = `<div class="box-post"> 
     <p id="Fecha" class="Fecha"> ${data.fecha} 
     <h1 id="title" class="title">${data.title}</h1>
    <h2 id="Idea" class="Idea"> ${data.idea}<h2>
        
       
       </div>
      `
      return view;
    },
    afterRender: () => {
   
    } 
  }