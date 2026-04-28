import createHomePage from "../views/pages/homeView.js";
import homeView from "../views/pages/homeView.js";
import { getLatestProducts } from "./productController.js";

export function homeController() {
  const latestProducts = getLatestProducts()  
  const viewHtml = createHomePage();
}