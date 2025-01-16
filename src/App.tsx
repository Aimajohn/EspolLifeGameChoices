import { useState, useEffect } from "react"
import "./App.css"
import { Button } from "@/components/ui/button"
import MazoCartas from "@/assets/cartas.json"
import { StatsBar } from "@/components/StatsBar"
import Victoria from "@/assets/Victoria.png"
import Derrota from "@/assets/derrota.png"
import { Link } from "react-router-dom"
import Deck from "@/assets/deck.png"

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
import { ModalCard } from "./components/ModalCard"

const misCartas = {
  "001": {
    id: "001",
    CardName: "Suit&Cofi",
    description: "Delicioso impulso energetico, aunque afecta tu presupuesto",
    src: "/EspolLifeGameChoices/assets/Cartas/CafeSuit&Cofi.png",
    energia: 5,
    money: -5,
    conocimiento: 0,
    social: 0,
  },
  "002": {
    id: "002",
    CardName: "Trabajo en Grupo",
    src: "/EspolLifeGameChoices/assets/Cartas/TrabajaGrupo.png",
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

  useEffect(() => {
    // setChecked(true)
  }, [selected])

  const renderJsonData = (cardData: mazo) => {
    return Object.entries(cardData).map(([key, value]) => (
      <div className="-mx-1 w-36 2xl:w-52" key={key}>
        <ModalCard
          playCards={playCards}
          setPlayCards={setPlayCards}
          setActionPoints={setActionPoints}
          actionPoints={actionPoints}
          setSelected={setSelected}
          selected={selected}
          playerInfo={playerInfo}
          setPlayerInfo={setPlayerInfo}
          info={value}
          id={key}
          seleccionado={setSelected}
        />
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
        className={`relative min-h-svh w-full border-slate-800 text-slate-200 2xl:border-[1.6rem] ${isGameOver ? "blur-sm" : ""}`}
      >
        <div className="relative z-50 w-72 pt-4 2xl:w-96 2xl:pt-0">
          <StatsBar playerInfo={playerInfo} />
          <HelpButton />
        </div>
        <article className="absolute top-8 flex w-full">
          <div className="text-md mx-auto flex grow-0 rounded-sm bg-gray-900 p-4 text-slate-200/90 2xl:p-6 2xl:text-2xl">
            <h2 className="items-centers flex flex-col">
              <span>
                Días antes del exámen {currentTurn}
                <br />
              </span>
              <span className={`flex justify-center`}>
                <span>Puntos de accion {actionPoints}</span>
              </span>
            </h2>
          </div>
        </article>
        <Button
          className="absolute bottom-[30%] right-12 z-50 m-4 flex size-28 flex-col bg-blue-600 hover:bg-blue-700/95 2xl:size-40"
          onClick={() => handleMaze()}
          disabled={actionPoints > 0 ? false : true}
        >
          <img src={Deck} alt="Mazo" />
          <span className="-mt-6 font-semibold">Coger Carta</span>
        </Button>
        <section
          className={`absolute bottom-4 flex w-full flex-col items-center`}
        >
          <Button
            className={`mb-4 bg-blue-500 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={`lg`}
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
