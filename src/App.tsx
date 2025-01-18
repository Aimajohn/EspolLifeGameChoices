import { infoInicial, mazo, CartaT, initialHand } from "@/types"
import { Link } from "react-router-dom"
import { lazy, useState } from "react"
import MazoCartas from "@/assets/cartas.json"
import Victoria from "@/assets/Victoria.png"
import Derrota from "@/assets/derrota.png"
import Deck from "@/assets/deck.png"
import { Button } from "@/components/ui/button"
import { HelpButton } from "./components/ui/HelpButton"
import Score from "./components/ui/Score"
import Table from "./components/Table"
import TimeChart from "@/components/TimeChart"
import { ModalCard } from "./components/ModalCard"
import { FaQuestion } from "react-icons/fa"
import { TodasCartas } from "./TodasCartas"
import "./App.css"
const StatsBar = lazy(() => import("./components/StatsBar.tsx"))

function App() {
  const [currentTurn, setCurrentTurn] = useState(5)
  const [playDeck, setplayDeck] = useState<CartaT[]>(Object.values(MazoCartas))
  const [actionPoints, setActionPoints] = useState(3)
  const [selected, setSelected] = useState<CartaT | null>(null)
  const [playCards, setPlayCards] = useState<mazo>(initialHand)
  const [tableCards, setTableCards] = useState<mazo>({})
  const [isGameOver, setIsGameOver] = useState(false)
  const [playerInfo, setPlayerInfo] = useState(infoInicial)

  const handleTableCards = (card: CartaT) => {
    setTableCards({ ...tableCards, [card.id]: card })
  }

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
          setTableCards={handleTableCards}
        />
      </div>
    ))
  }

  const handleMaze = () => {
    if (playDeck.length > 0 && actionPoints > 0) {
      const randomIndex = Math.floor(Math.random() * playDeck.length)
      const drawnCard = playDeck[randomIndex]
      setplayDeck(playDeck.filter((_, index) => index !== randomIndex))
      setPlayCards({ ...playCards, [drawnCard.id]: drawnCard })
      setActionPoints(actionPoints - 1)
    }
  }

  const endTurn = () => {
    if (currentTurn > 0) {
      setCurrentTurn(currentTurn - 1)
      setActionPoints(3)

      const maData = playerInfo
      if (selected == null) return
      maData.conocimiento += selected?.conocimiento
      maData.energia += selected?.energia
      maData.social += selected?.social
      maData.money += selected?.money
      setPlayerInfo(maData)
      setTableCards({})
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

  const miMazo = renderJsonData(playCards)

  return (
    <>
      {isGameOver && (
        <article
          id="GameOverModal"
          className="absolute top-20 z-50 ml-[30%] flex w-2/5 flex-col items-center rounded-md bg-slate-900 p-12 text-slate-200"
        >
          <h2 className="text-center text-3xl font-semibold">
            {checkVictory() ? "¡Victoria!" : "Derrota"}
          </h2>
          <div className="mx-auto my-4 w-52 2xl:w-96">
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
        </article>
      )}
      <main
        className={`relative min-h-svh w-full bg-indigo-950/30 text-slate-200 ${isGameOver ? "blur-sm" : ""}`}
      >
        <section id="TopSection" className="relative">
          <div className="absolute top-6 z-50 w-72 2xl:w-80">
            <StatsBar playerInfo={playerInfo} />
            <HelpButton />
          </div>
          <TimeChart currentTurn={currentTurn} actionPoints={actionPoints} />
        </section>

        <article className="absolute top-28 flex w-full transform flex-col items-center gap-4 2xl:top-1/4">
          <div className="-mb-2 h-10 w-1/3 min-w-[30rem]">
            <Score tableCards={tableCards} />
          </div>
          <div className="flex h-52 w-1/3 min-w-[30rem] items-center bg-slate-700/80 2xl:h-60 2xl:max-h-60">
            {Object.keys(tableCards).length != 0 ? (
              <Table tableCards={tableCards} />
            ) : null}
          </div>
        </article>
        <section
          id="Cards&Deck"
          className={`absolute bottom-4 flex w-full flex-col items-center`}
        >
          <div className="absolute -top-[30%] right-12 z-50 m-4">
            <Button
              className="flex size-28 flex-col bg-blue-600 hover:bg-blue-700/95 2xl:size-40"
              onClick={() => handleMaze()}
              disabled={actionPoints > 0 ? false : true}
            >
              <img src={Deck} alt="Mazo" />
              <span className="-mt-6 font-semibold">Coger Carta</span>
            </Button>
            <TodasCartas>
              <Button
                size={"icon"}
                className="absolute -right-6 -top-6 bg-blue-950 hover:bg-blue-950/60"
              >
                <FaQuestion />
              </Button>
            </TodasCartas>
          </div>
          <Button
            className={`mb-4 bg-blue-700 hover:bg-blue-800/90 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={`lg`}
            onClick={() => endTurn()}
          >
            Terminar Turno
          </Button>
          <div className="z-1 flex flex-wrap justify-center gap-2">
            {miMazo}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
