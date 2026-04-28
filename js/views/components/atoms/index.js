export const createFragment = () => document.createDocumentFragment()

// Paragraph Atom
export const createParagraph = (text, className = '') => {
    const element = document.createElement('p')
    element.className = className
    element.innerHTML = text
    return element
}

// Div Atom
export const createDiv = (className = '') => {
    const element = document.createElement('div')
    element.className = className
    return element
}

// Article Atom
export const createArticle = (className = '') => {
    const element = document.createElement('article')
    element.className = className
    return element
}

// Heading Atom
export const createHeading = (num, text, className = '') => {
    const element = document.createElement(`h${num}`)
    element.className = className
    element.innerText = text
    return element
}

// Ul Atom
export const createUl = (className = '') => {
    const element = document.createElement('ul')
    element.className = className
    return element
}

// Li Atom
export const createLi = (className = '') => {
    const element = document.createElement('li')
    element.className = className
    return element
}

// Link Atom
export const createLink = (href, className = '') => {
    const element = document.createElement('a')
    element.className = className
    element.href = href
    return element
}

export const createImage = (src, title, className = '') => {
    const element = document.createElement('img')
    element.src = src
    element.className = className
    element.alt = title
    element.title = title
    return element
}

export const createForm = (method = 'GET', className = '') => {
    const el = document.createElement('form')
    el.method = method
    el.className = className
    return el
}

export const createLabel = (title, id) => {
    const el = document.createElement('label')
    el.htmlFor = id
    el.textContent = title
    el.className = 'mr-4 w-[120px] inline-block'
    return el
}

export const createInput = (type, name, placeholder, value = '', className = '') => {
    const el = document.createElement('input')
    el.type = type
    el.name = name
    el.autocomplete = true
    el.placeholder = placeholder || ''
    el.defaultValue = value
    el.className = 'border border-gray-300 rounded px-3 py-2 w-[400px]'
    return el
}

export const createButton = (title, type, className = 'text-white text-base border border-slate-400 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-800 inset-shadow ml-4') => {
    const el = document.createElement('button')
    el.type = type || 'submit'
    el.className = className
    el.textContent = title
    return el
}
