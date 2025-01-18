import { Button } from "@/components/ui/button"
import { TodasCartas } from "@/TodasCartas"
import { FaQuestion } from "react-icons/fa"
import Deck from "@/assets/deck.png"
import { useCardStore, useStatStore } from "@/AStore/AStore"

type Props = {}

function DeckButton({}: Props) {
  const actionPoints = useStatStore((state) => state.actionPoints)
  const handleMaze = useCardStore((state) => state.handleMaze)
  const playCards = useCardStore((state) => state.handleMaze)
  return (
    <div className="w-full">
      <Button
        className="flex size-28 flex-col bg-blue-600 hover:bg-blue-700/95 2xl:size-40"
        onClick={() => handleMaze()}
        disabled={
          actionPoints <= 0 || Object.values(playCards).length >= 7
            ? true
            : false
        }
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
  )
}

export default DeckButton
