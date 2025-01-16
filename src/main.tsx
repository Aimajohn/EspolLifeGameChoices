import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
// import { GameBoard } from './GameBoard.tsx'
import { Route, Routes, HashRouter } from "react-router-dom"
import Instructions from "./Instructions.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <div className="min-h-svh bg-[url('/src/assets/FondoEspol.jpg')] bg-cover bg-no-repeat">
        <Routes>
          <Route path="/" index element={<Instructions />} />
          <Route path="/Game" index element={<App />} />
        </Routes>
      </div>
    </HashRouter>
  </StrictMode>,
)
