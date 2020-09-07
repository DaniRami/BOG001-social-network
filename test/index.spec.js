// importamos la funcion que vamos a testear
//import { register } from "../src/firebaseFunctions/register.js";
import MockLogin from "../src/_mocks_/mockLogin";
import { loginWithEmail } from "../src/FireFunctions/signInEmailGoogle";
import { loginGoogle } from "../src/FireFunctions/signInEmailGoogle";
global.firebase = MockLogin();

describe("loginWithEmail", () => {
  it("deberia ser una funcion", () => {
    expect(typeof loginWithEmail).toBe("function");
  });

  it("deberia poder iniciar seccion con correo:dora@gmail.com y contraseña:123456789", () => {
    return loginWithEmail("dora@gmail.com", "123456789").then((data) => {
      expect(data).toEqual( { title: "Bienvenido", message: "Ingresaste con correo eletronico" });
    });
  });

  it("deberia dar un error para este correo", () => {
    return loginWithEmail("dora.gmail.com").catch((error) => {
      expect(error).toBe("Por favor introduce un correo válido");
    });
  });

  it("deberia dar un error para este contraseña", () => {
    return loginWithEmail("1234").catch((error) => {
      expect(error).toBe("error contraseña incorrecta");
    });
  });
});

describe("loginGoogle", () => {
  it("deberia ser una funcion", () => {
    expect(typeof loginGoogle).toBe("function");
  });

  it("deberia recibir un oject de respuesta exitosa  del provaider al iniciar seccion con google", () => {
    return loginGoogle("provaider").then(() => {
      const result = [
        "client_id",
        "response_type",
        "scope",
        "redirect_uri",
        "state",
      ];
      expect(typeof result).toBe("object");
    });
  });
  it("deberia salir un error cuando no termino de hacer el login con google", () => {
    return loginGoogle("provaider").catch((error) => {
      expect(error).toBe("error no terminaste de hacer el login con google");
    });
  });
  it("deberia salir un error cuando ya estas logeado con email y password", () => {
    return loginGoogle("provaider").catch((error) => {
      expect(error).toBe(
        "error ya te encuentras registado con correo eletronico"
      );
    });
  });
});
