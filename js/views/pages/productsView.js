import { createDiv, createHeading, createImage, createLink, createParagraph } from "../components/atoms/index.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js"

export const createProductsPage = (products, category_slug, title = 'Produkter') => {
    const view = createMainWrapper(title)

    products.map(product => {
        const { name, imageUrl, teaser, price, stock, slug } = product 

        const card = createDiv('p-4 border rounded-lg mb-4 shadow-md')

        const link = createLink(`/index.htm#/produkter/${category_slug}/${slug}`, 'flex items-center gap-4 min-w-0')

        const imageCol = createDiv('shrink-0 w-[120px]')
        const img = createImage(`http://localhost:4000${imageUrl}`, name, 'w-[80px] h-auto rounded')
        img.loading = 'lazy'
        imageCol.append(img)
        link.append(imageCol)

        const infoCol = createDiv('flex-1 min-w-0')
        const header = createHeading(3, name, 'font-bold truncate')

        const teaserElm  = createParagraph()
        teaserElm.innerText = teaser

        infoCol.append(header, teaserElm)
        link.append(infoCol)
    

        card.append(link)
        view.append(card)
    })
    return view
}