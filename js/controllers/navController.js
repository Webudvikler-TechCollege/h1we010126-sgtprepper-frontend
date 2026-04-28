import { getCategoryList } from "../models/categoryModel.js"
import { render } from "../utils/dom.js"
import { createNav } from "../views/partials/navView.js"


const navController = async () => {
    const data = await getCategoryList()
    const viewHtml = await createNav(data)
    render('nav', viewHtml)
}

export default navController