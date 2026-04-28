import { createLi, createLink, createUl } from "../components/atoms/index.js"

export const createNav = async data => {
    const ul = createUl('flex')

    data.map(item => {
        const li = createLi('mr-6')
        const a = createLink(`/index.htm#/produkter/${item.slug}`)
        a.innerText = item.title
        li.append(a)
        ul.append(li)        
    })
    return ul

}