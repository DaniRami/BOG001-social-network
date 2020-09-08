const auth = () => {
  return {
    signInWithEmailAndPassword: (email, pass) => {
      return new Promise((resolve, reject) => {
        if ({ title: "Bienvenido", message: "Ingresaste con correo eletronico" }) {
          setTimeout(() => {
            resolve("ingresaste con correo");
          }, 3000);
        } else if (errorCode == "auth/invalid-email") {
          reject(new error("correo incorrecto"));
        } else if (errorCode == "auth/wrong-password") {
          reject(new error("contraseña incorrecta"));
        } else if (errorCode == "auth/user-not-found") {
          reject(new error("este correo no esta registrado"));
        }
        return {
          signInWithPopup: (provider) => {
            return new Promise((resolve, reject) => {
              if (provider) {
                setTimeout(() => {
                  resolve("ingresaste con google");
                }, 3000);
              } else if (errorCode === "auth/account-exists-with-different-credential") {
                reject(new error("ya esta registrado este correo con email y password"));
              } else if (errorCode == "auth / popup-closed-by-user") {
                reject(new error("no terminaste de ingresar con google"));
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
