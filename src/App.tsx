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
      <div className="-mx-1 aspect-[3/4] w-[11%]" key={key}>
        <div className="object-cover">
          <ModalCard
            info={value}
            setSelected={setSelected}
            selected={selected}
          />
        </div>
      </div>
    ))
  }
  const miMazo = renderJsonData(playCards)

  return (
    <main className="relative w-full">
      {isGameOver && (
        <article id="GameOverModal" className="flex w-full justify-center">
          <div className="absolute top-12 z-10 w-1/2">
            <GameOver />
          </div>
        </article>
      )}
      <div
        className={`relative grid h-svh grid-cols-5 grid-rows-5 overflow-hidden bg-indigo-950/30 p-6 text-slate-200 ${isGameOver ? "blur-sm brightness-50" : ""}`}
      >
        <div className="relative col-start-1 row-span-2 w-4/5 2xl:w-80">
          <StatsBar playerInfo={playerInfo} />
          <HelpButton />
        </div>
        <div className="col-start-3">
          <TimeChart />
        </div>

        <article
          id="TableSection"
          className="col-span-3 col-start-2 row-start-2 row-end-4 mx-auto mt-6 flex max-h-[300px] w-2/3 min-w-[30rem] flex-col items-center gap-4 bg-slate-700/80"
        >
          <div className="-mb-2 min-h-10 w-full px-6 py-1">
            <Score />
          </div>
          <div className="flex h-4/5 items-center 2xl:max-h-60">
            {Object.keys(tableCards).length != 0 ? <Table /> : null}
          </div>
        </article>

        <div className="col-span-1 col-start-5 row-start-4 -mt-12 mr-12 flex justify-end">
          <DeckButton />
        </div>

        <section
          id="Cards&Deck"
          className="relative col-span-5 col-start-1 row-start-4 row-end-6 -mb-4 mt-4 flex w-full flex-col items-center justify-end gap-2"
        >
          <Button
            className={`bg-blue-700 hover:bg-blue-800/90 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={`lg`}
            onClick={() => endTurn()}
            type="button"
          >
            Terminar Turno
          </Button>

          <div className="flex min-w-[30%] flex-wrap justify-center gap-2">
            {miMazo}
          </div>
        </section>
        {/* <section id="TopSection" className="relative"></section>
      <div className={`relative ${isGameOver ? "blur-sm" : ""}`}></div> */}
      </div>
    </main>
  )
}

export default App
