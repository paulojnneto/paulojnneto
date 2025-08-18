import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "@/components/ui/provider"
import App from "./App"
import "@/theme/fonts.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
