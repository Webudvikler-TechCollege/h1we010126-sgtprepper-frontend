import { Authenticate } from "../models/loginModel.js"
import { setCookie } from "../utils/cookies.js"
import { renderLoginPage } from "../views/pages/loginView.js"

export const loginController = () => {
    renderLoginPage(handleLogin)
}

export const handleLogin = async e => {
    e.preventDefault()
    
    const form = e.currentTarget
    
    const username = form.username.value.trim()
    const password = form.password.value

    try {
        const data = await Authenticate(username, password)
        setCookie('sgtprepper_token', JSON.stringify(data))
        location.href = "/index.htm"
    } catch (error) {
        console.error(`Fejl i login: ${error}`)
    }
}