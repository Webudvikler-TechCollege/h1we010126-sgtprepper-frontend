import { render } from "../utils/dom.js"
import { createFooter } from "../views/partials/footerView.js"

export const footerController = async () => {
    const viewHtml = createFooter()
    render('footer', viewHtml)
}