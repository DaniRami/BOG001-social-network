import {registerView} from "./register/register.js";
import {loginComponent} from "./login/login.js";
import {wallView, loadPost} from "./wall/wall.js";

export const router = async (route) => {
    
    const content = document.getElementById("root");
    
    switch (route) {

        case "#register":         
            content.innerHTML= await registerView.render();
            registerView.afterRender();
            break;
        
        case "#login":
            content.innerHTML = await loginComponent.render();
            loginComponent.afterRender();
            break;
        
        case "#wall":
            content.innerHTML = await  wallView.render();
            wallView.afterRender();
            loadPost();
            break;

           
        case "":
            location.hash="#login"    
            history.pushState("#login", "", "#login")
            break;
    

        default:
            "404 "
            break;
    }
}
    


 





