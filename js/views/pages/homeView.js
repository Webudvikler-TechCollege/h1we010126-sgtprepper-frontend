import { Paragraph } from "../components/atoms/index.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const homeView = () => {
    const app = document.querySelector("#root");
    const view = createMainWrapper('Velkommen til Sgt. Prepper', 'En side hvor du kan preppe')
    app.append(view)
}

export default homeView