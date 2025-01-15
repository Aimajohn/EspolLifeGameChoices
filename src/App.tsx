import { useState, useEffect } from "react"
import "./App.css"
import Card from "@/componentes/Card"
import { Button } from "@/components/ui/button"
import MazoCartas from "@/assets/cartas.json"
import { StatsBar } from "@/components/StatsBar"
import SelectedCard from "./componentes/SelectedCard"

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
  const [currentTurn, setCurrentTurn] = useState(1)
  const [playDeck, setplayDeck] = useState<CartaT[]>(Object.values(MazoCartas))
  const [actionPoints, setActionPoints] = useState(3)
  const [selected, setSelected] = useState<CartaT | null>(null)
  const [playCards, setPlayCards] = useState<mazo>(misCartas)
  const [isGameOver, setIsGameOver] = useState(false)
  const [playerInfo, setPlayerInfo] = useState({
    energia: 50,
    money: 50,
    conocimiento: 50,
    social: 50,
  })

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
    if (currentTurn < 5) {
      setCurrentTurn(currentTurn + 1)
      setActionPoints(3)
      // setCurrentEvent(null);
    } else {
      setIsGameOver(true)
    }
  }

  return (
    <>
      <div className='relative min-h-svh w-full bg-[url("/src/assets/FondoEspol.jpg")] bg-cover bg-no-repeat'>
        <div className="w-96">
          <StatsBar playerInfo={playerInfo} />
        </div>
        <h2>
          Turno {currentTurn}, Puntos de accion {actionPoints}
        </h2>
        <Button
          className="absolute bottom-[30%] right-12 m-4 flex h-40 w-40 flex-col bg-blue-600"
          onClick={() => handleMaze()}
        >
          <img src="/EspolLifeGameChoices/src/assets/deck.png" alt="Mazo" />
          <span className="-mt-6 font-semibold">Coger Carta</span>
        </Button>
        {selected && (
          <SelectedCard
            setSelected={setSelected}
            selected={selected}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
          />
        )}
        <div className="absolute bottom-4 flex w-full flex-col items-center">
          <Button className="mb-4 bg-gray-700" onClick={() => endTurn()}>
            Terminar Turno
          </Button>
          <div className="z-1 flex flex-wrap justify-center gap-2">
            {miMazo}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
