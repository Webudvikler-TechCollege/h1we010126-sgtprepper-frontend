import { createParagraph } from "../components/atoms/index.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const createHomePage = () => {
    const view = createMainWrapper('Velkommen til Sgt. Prepper', 'En side hvor du kan preppe')
    return view
}

export default createHomePage