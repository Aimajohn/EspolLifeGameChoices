import { mazo, CartaT, CartaRetoT } from "@/types"
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
import {
  useCardStore,
  useStatStore,
  useStatAnimation,
} from "@/AStore/AStore.ts"
import DeckButton from "./components/DeckButton.tsx"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import { MdFiberSmartRecord } from "react-icons/md"
import Cartas from "@/assets/CartasReto.json"
import { ModalTask } from "./components/ModalTask.tsx"
import DailyEvent from "./components/DailyEvent.tsx"

function App() {
  const [selected, setSelected] = useState<CartaT | null>(null)
  const [selectedR, setSelectedR] = useState<CartaRetoT | null>(null)
  const inEvent = useStatAnimation((state) => state.inEvent)
  const setInEvent = useStatAnimation((state) => state.setInEvent)

  //Estado de CardStore
  const playCards = useCardStore((state) => state.playCards)
  const tableCards = useCardStore((state) => state.tableCards)
  const setInitialDeck = useCardStore((state) => state.setInitialDeck)

  //Estado de Stats
  const actionPoints = useStatStore((state) => state.actionPoints)
  const endTurn = useStatStore((state) => state.endTurn)
  const currentTurn = useStatStore((state) => state.currentTurn)
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

  useEffect(() => {
    if (currentTurn > 0 && currentTurn % 2 == 0) {
      setInEvent()
    }
  }, [currentTurn])

  const renderJsonData = (cardData: mazo) => {
    return Object.entries(cardData).map(([key, value]) => (
      <div className="-mx-1 w-[14%]" key={key}>
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
      {inEvent && (
        <div className="absolute top-0 z-50 h-full w-full bg-slate-950/80">
          <DailyEvent />
        </div>
      )}
      <div
        className={`relative grid h-svh grid-cols-5 grid-rows-5 overflow-hidden bg-indigo-950/30 p-6 text-slate-200 ${isGameOver ? "blur-sm brightness-50" : ""}`}
      >
        <div className="relative col-start-1 row-span-2 w-4/5 2xl:w-80">
          <StatsBar playerInfo={playerInfo} />
          <HelpButton />
          <Alert variant={"game"} className="mt-4 rounded-sm">
            <Terminal className="h-5 w-5 !text-slate-200" />
            <AlertTitle>Examen Final</AlertTitle>
            <AlertDescription>
              Para superar el examen debes alcanzar: <br />
              <p className="font-medium opacity-90">
                <span className="my-1 flex items-center">
                  <MdFiberSmartRecord size={15} className="mr-2" />
                  70 pts de Conocimiento.
                  <br />
                </span>
                <span className="flex items-center">
                  <MdFiberSmartRecord size={15} className="mr-2" />
                  60 pts en 2 Atributos más.
                </span>
              </p>
            </AlertDescription>
          </Alert>
        </div>
        <div className="col-start-1 col-end-2 row-span-2 row-end-6 mt-auto flex h-min w-4/5 items-end rounded-sm bg-gray-900/80 2xl:w-80">
          <TimeChart />
        </div>

        <article className="col-start-5 row-span-2 ml-auto flex w-4/5 flex-col items-center justify-center rounded-sm bg-slate-900/80 2xl:w-80">
          <h2 className="text-sm font-semibold 2xl:text-lg">
            Desafío Temporal
          </h2>
          <div className="w-4/6 overflow-hidden rounded-lg hover:bg-blue-700">
            <ModalTask
              info={Cartas.R001 as CartaRetoT}
              selected={selectedR}
              setSelected={setSelectedR}
            />
          </div>
        </article>

        <article
          id="TableSection"
          className="col-span-3 col-start-2 row-start-2 row-end-4 mx-auto -mt-10 flex max-h-[300px] w-2/3 min-w-[30rem] flex-col items-center gap-4 bg-slate-700/80"
        >
          <div className="-mb-2 min-h-10 w-full px-6 py-1">
            <Score />
          </div>
          <div className="flex h-4/5 items-center 2xl:max-h-60">
            {Object.keys(tableCards).length != 0 ? <Table /> : null}
          </div>
        </article>

        <div className="col-span-1 col-start-5 row-start-4 row-end-6 ml-[10%] mr-12 flex w-full items-end justify-start">
          <DeckButton />
        </div>

        <section
          id="Cards&Deck"
          className="relative col-start-2 col-end-5 row-start-4 row-end-6 -mb-4 mt-4 flex w-full flex-col items-center justify-end gap-2"
        >
          <Button
            className={`absolute top-0 rounded-sm bg-blue-700 hover:bg-blue-800/90 ${actionPoints <= 0 ? "animate-bounce" : ""}`}
            size={`lg`}
            onClick={() => endTurn()}
            type="button"
          >
            Terminar Turno
          </Button>

          <div className="mb-4 flex w-[110%] flex-wrap justify-center gap-2">
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
