import { createInput, createLabel, createDiv } from "../atoms/index.js"

export const createFormGroup = (labelname, type, name, placeholder, value) => {
    const el = createDiv()

    const labelElm = createLabel(labelname, name)
    const inputElm = createInput(type, name, placeholder, value)

    el.append(labelElm, inputElm)

    return el
}