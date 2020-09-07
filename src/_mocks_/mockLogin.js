const auth = () => {
  debugger
  return {
    signInWithEmailAndPassword: (email, pass) => {
      return new Promise((resolve, reject) => {
       if ({ title: "Bienvenido", message: "Ingresaste con correo eletronico" } ){
        setTimeout(() => {
               resolve("Bienvenido");
       },2000) 
      } else if("Por favor introduce un correo válido"){
      reject( error )
         
      } else if("error contraseña incorrecta") {
      reject(error)
      }
      return {
          signInWithPopup: (provaider) => {
            return new Promise((resolve, reject) => {
             if (object){
              setTimeout(() =>{
                resolve("object")
              } , 2000)
             } else if("Error ya te encuentras registado con correo eletronico"){
                reject(error)
             } else if("Error no terminaste de hacer el login con google"){
               reject(error)
             }
            });
          },
        };
      });
    },
  };
};

const firebase = {
  auth: auth,
};

export default jest.fn(() => {
  return firebase;
});
