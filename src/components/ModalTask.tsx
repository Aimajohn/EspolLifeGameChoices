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
import { CartaRetoT } from "@/types"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Badge } from "@/components/ui/badge"

import { useStatStore } from "@/AStore/AStore"
import DiceComponent from "./DiceComponent"
import { useState } from "react"

type Props = {
  info: CartaRetoT
  selected: CartaRetoT | null
  setSelected: React.Dispatch<React.SetStateAction<CartaRetoT | null>>
}

export function ModalTask({ info, setSelected, selected }: Props) {
  const [inGame, setInGame] = useState(false)
  const actionPoints = useStatStore((state) => state.actionPoints)
  // const playCards = useCardStore((state) => state.playCards)
  const Intentos = useStatStore((state) => state.Intentos)

  const setActionPoints = useStatStore((state) => state.setActionPoints)
  // const setTableCards = useCardStore((state) => state.handleTableCards)

  // const handleCardBack = () => {
  //   setSelected(null)
  // }

  const handleCardAction = (selected: CartaRetoT | null) => {
    if (actionPoints > 1) {
      if (!selected) return null
      setActionPoints(-2)
    }
    setInGame(true)
  }

  const categories = ["conocimiento", "energia", "social", "money"] as const
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size={"fit"}
          onClick={() => setSelected(info)}
          variant="fit"
          disabled={Intentos.length >= 3 ? true : false}
        >
          {<Card maInfo={info.succeed} src={info.src} id={info.id} />}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full border-slate-900/95 bg-slate-900/95 text-slate-100 shadow-md 2xl:max-w-[35%]">
        {inGame && (
          <article className="absolute z-50 h-full w-full bg-slate-950/95">
            <div className="absolute -right-16 flex flex-col gap-2">
              {Intentos.map((intento) => (
                <Button className="size-12 rounded-full bg-slate-200 font-bold text-slate-800">
                  <p>{intento}</p>
                </Button>
              ))}
            </div>
            <section className="p-[5%] text-center">
              <h2 className="text-xl font-semibold">Tira los dados!</h2>
              <span>
                Debes sacar +10 pts para superar la tarea, tienes 3
                oportunidades
              </span>
            </section>
            <div className="">
              <DiceComponent selected={selected} setSelected={setSelected} />
            </div>
          </article>
        )}
        <div className="flex">
          <div className="flex h-full w-[40%] items-center">
            <img src={info.src} alt={info.name} />
          </div>
          <div className="flex h-full w-[60%] flex-col justify-between p-4 pl-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <DialogHeader>
                  <DialogTitle>{info.name}</DialogTitle>
                  <DialogDescription>
                    <>
                      {info.description}
                      <br /> Requiere 2 puntos de acción
                    </>
                  </DialogDescription>
                </DialogHeader>
                <h3 className="2xl:text-md mb-2 mt-6 text-sm font-semibold text-slate-100">
                  Atributos
                </h3>
                <div className="grid grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Falla</h4>
                    <span className="flex w-min flex-col gap-2">
                      {[
                        categories.map((a) =>
                          info.fail[a] != 0 ? (
                            <Badge puntos={info.fail[a]} variant={a}>
                              {a == "money" ? "Dinero" : a}
                            </Badge>
                          ) : null,
                        ),
                      ]}
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Exito</h4>
                    <span className="flex w-min flex-col gap-2">
                      {[
                        categories.map((a) =>
                          info.succeed[a] != 0 ? (
                            <Badge puntos={info.succeed[a]} variant={a}>
                              {a == "money" ? "Dinero" : a}
                            </Badge>
                          ) : null,
                        ),
                      ]}
                    </span>
                  </div>
                </div>
              </div>
              <DialogFooter className="relative mt-12">
                <DialogPrimitive.Close
                  className="h-10 rounded-md bg-slate-300/80 px-6 font-semibold text-slate-950 hover:bg-slate-300/60 2xl:px-12"
                  // onClick={() => handleCardBack()}
                >
                  Atrás
                </DialogPrimitive.Close>
                <Button
                  className="h-10 rounded-md bg-blue-600 px-6 font-semibold text-slate-100 hover:bg-blue-600/70 disabled:bg-blue-600/20 2xl:px-12"
                  onClick={() => handleCardAction(selected)}
                  disabled={actionPoints < 2 ? true : false}
                >
                  Jugar
                </Button>
                {/* {actionPoints <= 0 ? (
                  <span className="absolute bottom-12 text-red-500">
                    No tienes puntos de acción
                  </span>
                ) : null} */}
              </DialogFooter>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
