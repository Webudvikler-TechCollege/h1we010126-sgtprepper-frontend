import renderFooter from "./views/partials/footerView.js"
import navController from "./controllers/navController.js"
import { initRouter } from "./router/router.js"
import { headerController } from "./controllers/headerController.js"

const initApp = () => {
  headerController()
  navController()
  renderFooter()
  initRouter()
}

initApp()