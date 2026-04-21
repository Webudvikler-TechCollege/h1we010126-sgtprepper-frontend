import { price2Dkk } from "../../utils/formatters.js"
import { Heading, Paragraph } from "../components/atoms/index.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js"

export const productView = (product) => {    
    const { name, price } = product
    const root = document.querySelector('#root')
    const view = createMainWrapper(name)
    root.append(view)

    const p = Paragraph()
    p.textContent = price


    root.append(h1, p)


}