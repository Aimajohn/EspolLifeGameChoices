import { StrictMode, lazy } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
// import { GameBoard } from './GameBoard.tsx'
import { Route, Routes, HashRouter } from "react-router-dom"
const Instructions = lazy(() => import("./Instructions.tsx"))
const StartPage = lazy(() => import("./StartPage.tsx"))
const FondoGame = lazy(() => import("./components/FondoGame.tsx"))

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      {/* <div className="min-h-svh bg-[url('/src/assets/FondoEspol.jpg')] bg-cover bg-no-repeat px-6"> */}
      <div className="relative min-h-svh bg-[#32b5e0] bg-cover bg-no-repeat">
        <div className="relative z-10">
          <Routes>
            <Route path="/" index element={<StartPage />} />
            <Route path="/Instructions" index element={<Instructions />} />
            <Route path="/Game" index element={<App />} />
            {/* <Route path="/Dice" index element={<Dice />} /> */}
          </Routes>
        </div>
        <div className="absolute bottom-0 z-0">
          <FondoGame />
        </div>
      </div>
    </HashRouter>
  </StrictMode>,
)
