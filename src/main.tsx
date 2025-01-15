import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { GameBoard } from './GameBoard.tsx'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  HashRouter
} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' index element={<App/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
