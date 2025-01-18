import { mazo, CartaT } from "@/types"
import { lazy, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { HelpButton } from "./components/ui/HelpButton"
import Score from "./components/ui/Score"
import Table from "./components/Table"
import TimeChart from "@/components/TimeChart"
import GameOver from "@/components/GameOver.tsx"
import { ModalCard } from "./components/ModalCard"
import "./App.css"
const StatsBar = lazy(() => import("./components/StatsBar.tsx"))
import { useCardStore, useStatStore } from "@/AStore/AStore.ts"
import DeckButton from "./components/DeckButton.tsx"

function App() {
  const [selected, setSelected] = useState<CartaT | null>(null)

  //Estado de CardStore
  const playCards = useCardStore((state) => state.playCards)
  const tableCards = useCardStore((state) => state.tableCards)
  const setInitialDeck = useCardStore((state) => state.setInitialDeck)

  //Estado de Stats
  const actionPoints = useStatStore((state) => state.actionPoints)
  const endTurn = useStatStore((state) => state.endTurn)
  const playerInfo = useStatStore((state) => state.playerInfo)
  const isGameOver = useStatStore((state) => state.isGameOver)
  const setInitialStats = useStatStore((state) => state.setInitialStats)

  //----------------
  useEffect(() => {
    try {
      setInitialStats()
      setInitialDeck()
    } catch {
      console.error("upsie")
    }
  }, [])

  const renderJsonData = (cardData: mazo) => {
    return Object.entries(cardData).map(([key, value]) => (
      <div className="-mx-1 w-36 2xl:w-52" key={key}>
        <ModalCard info={value} setSelected={setSelected} selected={selected} />
      </div>
    ))
  }
  const miMazo = renderJsonData(playCards)

  return (
    <>
      {isGameOver && (
        <article
          id="GameOverModal"
          className="absolute top-20 z-50 ml-[30%] w-2/5"
        >
          <GameOver />
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
          <TimeChart />
        </section>

        <article
          id="TableSection"
          className="absolute top-28 flex w-full transform flex-col items-center gap-4 2xl:top-1/4"
        >
          <div className="-mb-2 h-10 w-1/3 min-w-[30rem]">
            <Score />
          </div>
          <div className="flex h-52 w-1/3 min-w-[30rem] items-center bg-slate-700/80 2xl:h-60 2xl:max-h-60">
            {Object.keys(tableCards).length != 0 ? <Table /> : null}
          </div>
        </article>

        <section
          id="Cards&Deck"
          className="absolute bottom-4 flex w-full flex-col items-center"
        >
          <div className="absolute -top-[30%] right-12 z-50 m-4">
            <DeckButton />
          </div>
          <Button
            className={`bg-blue-700 hover:bg-blue-800/90 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={`lg`}
            onClick={() => endTurn()}
            type="button"
          >
            Terminar Turno
          </Button>
          <span className="h-6">
            {Object.keys(playCards).length >= 7 && (
              <span className="font-medium text-red-600 shadow-slate-100">
                Número max de cartas alcanzado
              </span>
            )}
          </span>
          <div className="z-1 flex h-48 min-w-[30%] flex-wrap justify-center gap-2 2xl:h-72">
            {miMazo}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
