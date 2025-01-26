import { Button } from "@/components/ui/button"
import { TodasCartas } from "@/TodasCartas"
import Deck from "@/assets/Deck.png"
import { useCardStore, useStatStore } from "@/AStore/AStore"
import { PiCardsFill } from "react-icons/pi"

type Props = {}

function DeckButton({}: Props) {
  const actionPoints = useStatStore((state) => state.actionPoints)
  const handleMaze = useCardStore((state) => state.handleMaze)
  const playCards = useCardStore((state) => state.playCards)
  return (
    <div className="justify-left relative flex w-full items-end">
      <Button
        className="relative flex h-min w-[53%] flex-col rounded-sm bg-transparent hover:bg-slate-900/20"
        onClick={() => handleMaze()}
        disabled={
          actionPoints <= 0 || Object.values(playCards).length >= 7
            ? true
            : false
        }
      >
        <img className="rounded-lg" src={Deck} alt="Mazo" />
        <span className="absolute rounded-sm bg-[#ff3b83] px-2 py-1 text-xs font-semibold 2xl:text-base">
          Coger Carta
        </span>
      </Button>
      {Object.keys(playCards).length >= 7 && (
        <span className="absolute left-[6%] top-[40%] rounded-md bg-slate-950/90 px-4 text-center text-xs font-semibold text-slate-200 2xl:text-base">
          Número max de <br />
          cartas alcanzado
        </span>
      )}
      <TodasCartas>
        <Button className="absolute -top-[5%] left-[43%] aspect-square h-auto rounded-sm border-none bg-slate-950/80 p-2 outline-none hover:bg-blue-800/90">
          <PiCardsFill className="size-8 rotate-90" />
        </Button>
      </TodasCartas>
    </div>
  )
}

export default DeckButton
