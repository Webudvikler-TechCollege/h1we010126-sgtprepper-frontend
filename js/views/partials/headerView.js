import { Div, Heading } from "../components/atoms/index.js"

const renderHeader = (loginBtn) => {
    const header = document.querySelector('#header')

    const divLogo = Div()
    const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    divLogo.append(h1)

    const divOpts = Div()
    divOpts.append(loginBtn)

    header.append(divLogo, divOpts)
}

export default renderHeader