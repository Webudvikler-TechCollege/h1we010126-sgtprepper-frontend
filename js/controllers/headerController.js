import { render } from "../utils/dom.js"
import { createHeader } from "../views/partials/headerView.js"
import { renderLoginButton } from "./loginController.js"

export const headerController = async () => {
    const loginButton = await renderLoginButton()
    const viewHtml = createHeader(loginButton)
    render('header', viewHtml)
}