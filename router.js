import {registerView} from "./register/register.js";
import {loginComponent} from "./login/login.js";
import {wallView,loadPost} from "./wall/wall.js";

export const router = async (route) => {
    
    const content = document.getElementById("root");
    switch (route) {
        case "#/register":
            window.location.hash="#/register";
            content.innerHTML= await registerView.render();
            registerView.afterRender();
            break;
        
        case "#/login":
            window.location.hash="#/login";
            content.innerHTML = await loginComponent.render();
            loginComponent.afterRender();
            break;
        
        case "#/wall":
            debugger
            window.location.hash = "#/wall";
            content.innerHTML = await  wallView.render();
            wallView.afterRender();
            loadPost()
            break;

        default:
            content.innerHTML = await loginComponent.render();
            loginComponent.afterRender();
            
    }
}
    
 
 





