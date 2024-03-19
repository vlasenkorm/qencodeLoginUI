import App from "./src/App"
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root"))
// eslint-disable-next-line react/react-in-jsx-scope
root.render(<App/>)
