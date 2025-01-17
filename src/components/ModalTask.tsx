import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Card from "./Card"
import { CartaT, PlayerInfoT, mazo } from "@/types"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Badge } from "@/components/ui/badge"
import PseudoCard from "./PseudoCard"

type Props = {
  id: string
  info: CartaT
  seleccionado: React.Dispatch<React.SetStateAction<CartaT | null>>
  setSelected: React.Dispatch<React.SetStateAction<CartaT | null>>
  selected: CartaT | null
  playerInfo: PlayerInfoT
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfoT>>
  setActionPoints: React.Dispatch<React.SetStateAction<number>>
  setPlayCards: React.Dispatch<React.SetStateAction<mazo>>
  actionPoints: number
  playCards: mazo
  setTableCards: (card: CartaT) => void
}

export function ModalCard({
  info,
  seleccionado,
  id,
  setSelected,
  playCards,
  selected,
  playerInfo,
  setPlayerInfo,
  setActionPoints,
  setPlayCards,
  actionPoints,
  setTableCards,
}: Props) {
  const handleCardAction = () => {
    if (actionPoints > 0) {
      if (!selected) return null
      setActionPoints(actionPoints - 1)
      let helperSet = playCards
      setTableCards(selected)
      delete helperSet[selected.id]
      setPlayCards(helperSet)
      console.log("hola", playCards)
    }
  }
  const handleCardBack = () => {
    setSelected(null)
  }
  const categories = ["conocimiento", "energia", "social", "money"] as const
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"fit"} onClick={() => setSelected(info)} variant="fit">
          {info.src != "" ? (
            <Card info={info} seleccionado={seleccionado} id={id} />
          ) : (
            <PseudoCard info={info} id={id} seleccionado={seleccionado} />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="border-slate-900/95 bg-slate-900/95 text-slate-100 shadow-md sm:max-w-[35%]">
        <div className="flex">
          <div className="flex h-full w-[60%] items-center">
            <img src={info.src} alt={info.CardName} />
          </div>
          <div className="flex h-full flex-col justify-between p-4 pl-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <DialogHeader>
                  <DialogTitle>{info.CardName}</DialogTitle>
                  <DialogDescription>{info.description}</DialogDescription>
                </DialogHeader>
                <h3 className="2xl:text-md mb-2 mt-6 text-sm font-semibold text-slate-100">
                  Atributos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    categories.map((a) =>
                      info[a] != 0 ? (
                        <Badge puntos={info[a]} variant={a}>
                          {a == "money" ? "Dinero" : a}
                        </Badge>
                      ) : null,
                    ),
                  ]}
                </div>
              </div>
              <DialogFooter className="relative mt-12">
                <DialogPrimitive.Close
                  className="h-10 rounded-md bg-slate-300/80 px-6 font-semibold text-slate-950 hover:bg-slate-300/60 2xl:px-12"
                  onClick={() => handleCardBack()}
                >
                  Atrás
                </DialogPrimitive.Close>
                <DialogPrimitive.Close
                  className="h-10 rounded-md bg-blue-600 px-6 font-semibold text-slate-100 hover:bg-blue-600/70 disabled:bg-blue-600/20 2xl:px-12"
                  type="submit"
                  onClick={() => handleCardAction()}
                  disabled={actionPoints <= 0 ? true : false}
                >
                  Jugar
                </DialogPrimitive.Close>
                {actionPoints <= 0 ? (
                  <span className="absolute bottom-12 text-red-500">
                    No tienes puntos de acción
                  </span>
                ) : null}
              </DialogFooter>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
