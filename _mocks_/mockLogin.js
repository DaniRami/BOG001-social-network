const auth = () => {
    return {
        signInWithEmailAndPassword: (email, pass) => {
            return new Promise((resolve, reject) => {

                setTimeout(() => {
                    resolve("bienvenido")
                    reject("Por favor introduce un correo válido")
                    reject("error contraseña incorrecta")
                }, 2000);
                return {
                    signInWithPopup: (provaider) => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                resolve("object")
                                reject("error no terminaste de hacer el login con google")
                                reject("error ya te encuentras registado con correo eletronico")
                            }, 2000);
                        })
                    }
                }


            })

        }

    }

}




const firebase = {
    auth: auth
}

export default jest.fn(() => {
    return firebase;
})
