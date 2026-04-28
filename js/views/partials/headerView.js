import { createDiv, createFragment, createHeading } from "../components/atoms/index.js"

export const createHeader = (loginBtn) => {
    const header = createFragment()

    const divLogo = createDiv()
    const h1 = createHeading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    divLogo.append(h1)

    const divOpts = createDiv()
    divOpts.append(loginBtn)

    header.append(divLogo, divOpts)

    return header
}