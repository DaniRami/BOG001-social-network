import {router} from "/router.js";
import { windowModal } from './component/modal.js'
window.addEventListener('load', () =>{router(window.location.hash)});
console.log(window.location.hash);
//router(window.location.hash);
windowModal.render();
windowModal.afterRender();
