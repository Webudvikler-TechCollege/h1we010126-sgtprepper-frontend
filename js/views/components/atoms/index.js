// Paragraph Atom
export const Paragraph = (className = '') => {
    const element = document.createElement('p')
    element.className = className
    return element
}

// Div Atom
export const Div = (className = '') => {
    const element = document.createElement('div')
    element.className = className
    return element
}

// Heading Atom
export const Heading = (num, text, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.innerText = text
    return element
}

// Ul Atom
export const Ul = (className = '') => {
    const element = document.createElement('ul')
    element.className = className
    return element
}

// Li Atom
export const Li = (className = '') => {
    const element = document.createElement('li')
    element.className = className
    return element
}

// Link Atom
export const Link = (href, className = '') => {
    const element = document.createElement('a')
    element.className = className
    element.href = href
    return element
}

export const Image = (src, title, className = '') => {
    const element = document.createElement('img')
    element.src = src
    element.className = className
    element.alt = title
    element.title = title
    return element
}
