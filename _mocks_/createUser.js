const auth = () => {
   
  return {
    createUserWithEmailAndPassword: (email, password) => {
      return new Promise((resolve, reject) => {
        
        // Mock user's data:
        let alreadyAnUser = [
            {
                userEmail: "blanquita@gmail.com",
                userPassword: "111111"
            },
            {
                userMail: "dani@gmail.com",
                userPassword: "222222"
            }
        ];
    
        let error = {};
            
        if(email=="carosuarez90@gmail.com" && password.length>5 ){
            resolve()
        }else if (!email.includes("@")){
            error.code="auth/invalid-email";
            reject(error);
        } else if (password.length<6) {
            error.code="auth/weak-password";
            reject(error);
        } else if (alreadyAnUser.some(user =>user.userEmail==email)) {
            error.code="auth/email-already-in-use";
            reject(error);
        }
        
    });
        
    },

    currentUser: {
      email: "carosuarez90@gmail.com",
      password: "123456789",

      sendEmailVerification: (actionCodeSettings) => {
        new Promise((resolve) => {
          resolve("Email enviado correctamente");
        });
      },
    },
  };
};

const firebase = {
  auth: auth,
};

export default jest.fn(() => firebase);


