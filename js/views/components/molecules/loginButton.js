import { createButton } from "../atoms/index.js"

export const createLoginButton = (btnTxt, handleClick) => {
    const button = createButton(btnTxt)
    button.addEventListener('click', handleClick)
    return button

}