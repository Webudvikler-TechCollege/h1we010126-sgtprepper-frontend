import { homeController } from "../controllers/homeController.js";
import { loginController } from "../controllers/loginController.js";
import { productDetails, productList } from "../controllers/productController.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {
    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)
    //console.log(segments);
    
    if (segments.length === 0) {
        homeController();
        return;
    }

    if(segments[0] === 'produkter') {
        if(segments.length === 2) {
            productList(segments[1])
            return      
        } else {
            productDetails(segments[2])
            return
        }
    }

    if(segments[0] === 'login') {
        loginController()
        return
    }

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}