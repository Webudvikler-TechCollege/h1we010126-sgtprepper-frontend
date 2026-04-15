import { Div, Paragraph } from "../components/atoms/index.js"

const renderFooter = async () => {
    const footer = document.querySelector('#footer')
    const div = Div()
    div.innerText = 'TECHCOLLEGE'
    footer.append(div)
}

export default renderFooter