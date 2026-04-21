import { Div, Heading, Paragraph } from "../atoms/index.js"

export const createMainWrapper = (title, description = '') => {
    document.title = title

    let meta = document.querySelector('meta[name="description"]')

    if(!meta) {
        meta = document.createElement('meta')
        meta.name = 'description'
        document.head.appendChild(meta)
    }

    meta.content = description

    const div = Div()
    const h1 = Heading(1, title, 'font-bold text-2xl')
    div.append(h1)

    if(description) {
        const teaser = Paragraph()
        teaser.textContent = description
        div.append(teaser)
    }

    return div
}