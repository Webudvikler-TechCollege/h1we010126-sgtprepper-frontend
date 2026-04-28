import { Authenticate } from "../models/loginModel.js"
import { isLoggedIn, logout } from "../utils/auth.js"
import { setCookie } from "../utils/cookies.js"
import { render } from "../utils/dom.js"
import { createLoginButton } from "../views/components/molecules/loginButton.js"
import { createLoginPage } from "../views/pages/loginView.js"

export const loginController = () => {
    const viewHtml = createLoginPage(handleLogin)
    render('root', viewHtml, true)

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

export const renderLoginButton = async () => {
    const loggedIn = await isLoggedIn()
    const buttonTxt = loggedIn ? 'Log out' : 'Log in'

    const handleClick = () => {
        if(loggedIn) {
            logout()
            location.reload()
        } else {
            window.location.href = "/index.htm#/login"
        }
    }

    return createLoginButton(buttonTxt, handleClick)
    
}