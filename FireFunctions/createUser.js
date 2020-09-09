var actionCodeSettings = {
  url: "http://localhost:5000/",
};

export const createUser = async (email, password) => {
  let title;
  let message;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    var user = firebase.auth().currentUser;
    user.sendEmailVerification(actionCodeSettings);
    console.log(user);
    console.log("Hemos enviado un correo de verificación, por favor valida tu cuenta para continuar.");
    title="Registro Exitoso";
    message = "Te hemos enviado un correo, por favor valida tu cuenta";
    history.replaceState("#register", "", "#register");
    return {title, message};
     
    // return "Registrado Correctamente"
    
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    console.log(errorCode);
        
    if (errorCode == "auth/invalid-email") {
      title = "Por favor";
      message = "Introduce un correo válido";      
      // return message ;

    } else if (errorCode == "auth/email-already-in-use") {
      title = "Error";
      message = "Este correo ya está registrado";
      // return message ;

    } else if (errorCode == "auth/weak-password") {
      title = "Error";
      message = "La contraseña debe tener mínimo 6 caracteres"
      return message ;

    } else {
      errorCode;
    }    
    
    history.replaceState("#register", "", "#register");
    return {title, message};
  }


  
};
