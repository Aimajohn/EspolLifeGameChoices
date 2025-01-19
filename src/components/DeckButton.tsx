import { Button } from "@/components/ui/button"
import { TodasCartas } from "@/TodasCartas"
import { FaQuestion } from "react-icons/fa"
import Deck from "@/assets/deck.png"
import { useCardStore, useStatStore } from "@/AStore/AStore"

type Props = {}

function DeckButton({}: Props) {
  const actionPoints = useStatStore((state) => state.actionPoints)
  const handleMaze = useCardStore((state) => state.handleMaze)
  const playCards = useCardStore((state) => state.playCards)
  return (
    <div className="relative z-20 w-min">
      <Button
        className="flex size-24 flex-col rounded-sm bg-blue-600 hover:bg-blue-700/95 2xl:size-32"
        onClick={() => handleMaze()}
        disabled={
          actionPoints <= 0 || Object.values(playCards).length >= 7
            ? true
            : false
        }
      >
        <img src={Deck} alt="Mazo" />
        <span className="-mt-4 text-xs font-semibold 2xl:-mt-6 2xl:text-base">
          Coger Carta
        </span>
      </Button>
      {Object.keys(playCards).length >= 7 && (
        <span className="absolute -left-[10%] top-[25%] w-[120%] rounded-md bg-slate-950/50 px-4 text-center text-xs font-semibold text-slate-200 2xl:text-base">
          Número max de cartas alcanzado
        </span>
      )}
      <TodasCartas>
        <Button
          size={"bigIcon"}
          className="absolute -right-4 -top-4 rounded-sm bg-blue-950 hover:bg-blue-950/60 2xl:-right-6 2xl:-top-6"
        >
          <FaQuestion />
        </Button>
      </TodasCartas>
    </div>
  )
}

export default DeckButton
