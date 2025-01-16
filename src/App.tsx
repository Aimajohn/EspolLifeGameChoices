import { useState, useEffect } from "react"
import "./App.css"
import Card from "@/componentes/Card"
import { Button } from "@/components/ui/button"
import MazoCartas from "@/assets/cartas.json"
import { StatsBar } from "@/components/StatsBar"
import SelectedCard from "./componentes/SelectedCard"
import Victoria from "@/assets/Victoria.png"
import Derrota from "@/assets/derrota.png"
import { Link } from "react-router-dom"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type CartaT = {
  id: string
  CardName: string
  description: string
  src: string
  energia: number
  money: number
  conocimiento: number
  social: number
}

import { infoInicial } from "@/types"
import { HelpButton } from "./components/ui/HelpButton"

const misCartas = {
  "001": {
    id: "001",
    CardName: "Suit&Cofi",
    description: "Delicioso impulso energetico, aunque afecta tu presupuesto",
    src: "/EspolLifeGameChoices/src/assets/CafeSuit&Cofi.png",
    energia: 5,
    money: -5,
    conocimiento: 0,
    social: 0,
  },
  "002": {
    id: "001",
    CardName: "Trabajo en Grupo",
    src: "/EspolLifeGameChoices/src/assets/TrabajaGrupo.png",
    description: "Delicioso impulso energetico, aunque afecta tu presupuesto",
    energia: 12,
    money: -1,
    conocimiento: 5,
    social: 5,
  },
}

type mazo = {
  [id: string]: CartaT
}

function App() {
  const [currentTurn, setCurrentTurn] = useState(5)
  const [playDeck, setplayDeck] = useState<CartaT[]>(Object.values(MazoCartas))
  const [actionPoints, setActionPoints] = useState(3)
  const [selected, setSelected] = useState<CartaT | null>(null)
  const [playCards, setPlayCards] = useState<mazo>(misCartas)
  const [isGameOver, setIsGameOver] = useState(false)
  const [playerInfo, setPlayerInfo] = useState(infoInicial)
  console.log(isGameOver)

  useEffect(() => {
    // setChecked(true)
  }, [selected])

  const renderJsonData = (cardData: mazo) => {
    return Object.entries(cardData).map(([key, value]) => (
      <div className="w-52" key={key}>
        <Card info={value} id={key} seleccionado={setSelected} />
      </div>
    ))
  }
  const miMazo = renderJsonData(playCards)

  const handleMaze = () => {
    if (playDeck.length > 0 && actionPoints > 0) {
      const randomIndex = Math.floor(Math.random() * playDeck.length)
      const drawnCard = playDeck[randomIndex]
      console.log(drawnCard)
      setplayDeck(playDeck.filter((_, index) => index !== randomIndex))
      setPlayCards({ ...playCards, [drawnCard.id]: drawnCard })
      setActionPoints(actionPoints - 1)
    }
  }

  const endTurn = () => {
    if (currentTurn > 0) {
      setCurrentTurn(currentTurn - 1)
      setActionPoints(3)
      // setCurrentEvent(null);
    } else {
      setIsGameOver(true)
    }
  }

  const checkVictory = (): boolean => {
    const { conocimiento, ...otherStats } = playerInfo
    const highStats = Object.values(otherStats).filter((stat) => stat >= 60)
    return conocimiento >= 70 && highStats.length >= 2
  }

  return (
    <main className="relative">
      {isGameOver && (
        <div className="absolute top-20 z-50 ml-[30%] flex w-[40%] flex-col items-center rounded-md bg-slate-900 p-12 text-slate-200">
          <h2 className="text-center text-3xl font-semibold">
            {checkVictory() ? "¡Victoria!" : "Derrota"}
          </h2>
          <div className="mx-auto my-4 w-96">
            <img
              src={isGameOver && checkVictory() ? Victoria : Derrota}
              alt="GameOver"
            />
          </div>
          <p className="text-center text-lg">
            Conocimiento Académico final: {playerInfo.conocimiento}%
          </p>
          <Link to={"/"}>
            <Button
              className="mt-4 bg-gray-600 hover:bg-gray-800"
              size="amongus"
              onClick={() => setPlayerInfo(infoInicial)}
            >
              Volver a Jugar
            </Button>
          </Link>
        </div>
      )}
      <div
        className={`relative min-h-svh w-full border-[1.6rem] border-slate-800 text-slate-200 ${isGameOver ? "blur-sm" : ""}`}
      >
        <div className="relative z-50 w-96">
          <StatsBar playerInfo={playerInfo} />
          <HelpButton />
        </div>
        <article className="absolute top-8 flex w-full">
          <div className="mx-auto flex grow-0 rounded-sm bg-gray-900 p-6 text-2xl text-slate-200">
            <h2 className="items-centers flex flex-col">
              <span>
                Días antes del exámen {currentTurn}
                <br />
              </span>
              <span className={`flex justify-center`}>
                <span>Puntos de accion {actionPoints}</span>
                {/* <span
                  className={`relative flex h-3 w-3 ${actionPoints > 0 ? "hidden" : ""}`}
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span> */}
              </span>
            </h2>
          </div>
        </article>
        <Button
          disabled={actionPoints > 0 ? false : true}
          className="absolute bottom-[30%] right-12 m-4 flex h-40 w-40 flex-col bg-blue-600"
          onClick={() => handleMaze()}
        >
          <img src="/EspolLifeGameChoices/src/assets/deck.png" alt="Mazo" />
          <span className="-mt-6 font-semibold">Coger Carta</span>
        </Button>
        {selected && (
          <SelectedCard
            playCards={playCards}
            setPlayCards={setPlayCards}
            setActionPoints={setActionPoints}
            actionPoints={actionPoints}
            setSelected={setSelected}
            selected={selected}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
          />
        )}
        <section
          className={`absolute bottom-4 flex w-full flex-col items-center`}
        >
          <Button
            className={`mb-4 bg-blue-500 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={"lg"}
            onClick={() => endTurn()}
          >
            Terminar Turno
          </Button>
          <div className="z-1 flex flex-wrap justify-center gap-2">
            {miMazo}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
