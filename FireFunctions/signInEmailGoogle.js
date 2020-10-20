export const loginWithEmail = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    return { title: "Bienvenido", message: "Ingresaste con correo eletronico" };
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    let message;
    let title;
    console.log(errorMessage);

    if (errorCode == "auth/invalid-email") {
      title = "Por favor";
      message = "Introduce un correo válido";
    } else if (errorCode == "auth/wrong-password") {
      title = "Error";
      message = "Contraseña incorrecta";
    } else if (errorCode == "auth/user-not-found") {
      title = "Error";
      message = "Correo eletronico no registrado.";
    }
    return { title, message };
  }
};

export const loginGoogle = async () => {
  try {
    var provider = await new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");
    await firebase.auth().signInWithPopup(provider);
    var token = provider.credential.accessToken;
    var user = provider.user;
    console.log(user);
    console.log(token);
    return {
      status: true,
      title: "Bienvenido",
      message: "Ingresaste con google",
    };
  } catch (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    let message;
    console.log(errorMessage);
    console.log(email);
    console.log(credential);

    if (errorCode === "auth/account-exists-with-different-credential") {
      message = "Error ya te encuentras registado con correo eletronico";
    } else if (errorCode == "auth / popup-closed-by-user") {
      message = "Error no terminaste de hacer el login con google";
    }
    return { status: false, title: "Error", message };
  }
};
