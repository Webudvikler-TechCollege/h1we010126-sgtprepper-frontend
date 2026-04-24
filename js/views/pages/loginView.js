import { createButton, createForm } from "../components/atoms/index.js"
import { createFormGroup } from "../components/molecules/formGroup.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js"

export const renderLoginPage = (handleLogin) => {
    const root = document.querySelector('#root')
    const view = createMainWrapper('Login')
    root.append(view)
    
    const form = createForm()
    const username = createFormGroup('Brugernavn', 'text', 'username', 'Indtast brugernavn')
    const password = createFormGroup('Adgangskode', 'password', 'password', 'Indtast din adgangskode')
    const button = createButton('Login', 'submit')
    form.append(username, password, button)

    form.addEventListener('submit', e => {
        handleLogin(e)
    })

    root.append(form)
}