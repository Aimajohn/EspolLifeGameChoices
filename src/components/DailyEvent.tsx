import { useEffect, useState } from "react"
import Eventos from "@/assets/EventoDiario.json"
import { useCardStore, useStatStore, useStatAnimation } from "@/AStore/AStore"
import { categories, PlayerInfoT } from "@/types"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import Cartas from "@/assets/cartas.json"
import Card from "./Card"

type CardKey = "007" | "013"

type Props = {}

type EventCardT = {
  id: string
  title: string
  description: string
  condition: CardKey | "choice"
  src: string
  fail: PlayerInfoT
  succeed: PlayerInfoT
}

function DailyEvent({}: Props) {
  const playTask = useStatStore((state) => state.playTask)
  const turnos = useStatStore((state) => state.currentTurn)
  const playCards = useCardStore((state) => state.playCards)
  const setInEvent = useStatAnimation((state) => state.setInEvent)

  const [event, setEvent] = useState<EventCardT | null>(null)
  const misEventos = Object.values(Eventos)
  const n = Math.floor(Math.random() * 3)
  console.log(misEventos[n], n)
  console.log(misEventos[n].condition)
  useEffect(() => {
    if (turnos > 0 && turnos % 2 == 0) {
      setEvent({
        ...misEventos[n],
        condition: misEventos[n].condition as CardKey,
      })
      console.log(event)
    }
  }, [turnos])

  const handleMaFailEvent = () => {
    if (event) {
      playTask(event.fail)
    }
    setInEvent()
  }
  let maInfo: PlayerInfoT | null = null
  const handleMaSucceedEvent = () => {
    if (event) {
      playTask(event.succeed)
      if (event.condition != "choice") {
        maInfo = {
          conocimiento: Cartas[event.condition].conocimiento,
          social: Cartas[event.condition].social,
          money: Cartas[event.condition].money,
          energia: Cartas[event.condition].energia,
        }
      }
    }
    setInEvent()
  }
  return (
    <section>
      {event != null && (
        <article className="mx-auto mt-[10%] w-3/5 bg-slate-900 py-4 text-slate-200">
          <div className="flex">
            <div className="flex h-full w-[40%] items-center p-6">
              <img
                className="mx-auto size-[80%] rounded-md"
                src={event.src}
                alt={event.title}
              />
            </div>
            <div className="flex h-full w-[60%] flex-col justify-between p-4 pl-6">
              <div className="flex h-full flex-col justify-between">
                <div className="flex">
                  <div>
                    <section>
                      <h2 className="font-Montserrat my-3 text-lg font-bold 2xl:text-2xl">
                        {event.title}
                      </h2>
                      <p className="">
                        <>{event.description}</>
                      </p>
                    </section>
                    <h3 className="mb-2 mt-6 text-sm font-semibold text-slate-100 2xl:text-lg">
                      Atributos
                    </h3>
                    <div className="flex gap-8">
                      <div className="w-min rounded-sm bg-slate-400/20 px-6 py-4 text-center">
                        <h4 className="mb-2 font-semibold">Falla</h4>
                        <span className="flex w-min flex-col gap-2">
                          {[
                            categories.map((a) =>
                              event.fail[a] != 0 ? (
                                <Badge puntos={event.fail[a]} variant={a}>
                                  {a == "money" ? "Dinero" : a}
                                </Badge>
                              ) : null,
                            ),
                          ]}
                        </span>
                      </div>
                      <div className="w-min rounded-sm bg-slate-400/20 px-6 py-4 text-center">
                        <h4 className="mb-2 font-semibold">Exito</h4>
                        <span className="flex w-min flex-col gap-2">
                          {[
                            categories.map((a) =>
                              event.succeed[a] != 0 ? (
                                <Badge puntos={event.succeed[a]} variant={a}>
                                  {a == "money" ? "Dinero" : a}
                                </Badge>
                              ) : null,
                            ),
                          ]}
                        </span>
                      </div>
                    </div>
                  </div>
                  {event.condition != "choice" && maInfo != null && (
                    <div className="w-min rounded-sm bg-slate-400/20 px-6 py-4 text-center">
                      <h4 className="mb-2 font-semibold">Required:</h4>
                      <span className="flex w-min flex-col gap-2 text-white">
                        <div className="w-40">
                          <Card
                            id="12"
                            maInfo={maInfo}
                            src={Cartas[event.condition].src}
                          />
                        </div>
                      </span>
                    </div>
                  )}
                </div>

                <section className="mt-12 flex gap-4">
                  <Button
                    className="h-10 rounded-md bg-slate-300/80 px-6 font-semibold text-slate-950 hover:bg-slate-300/60 2xl:px-12"
                    // onClick={() => handleCardBack()}
                    onClick={() => handleMaFailEvent()}
                  >
                    Ignorar
                  </Button>
                  <Button
                    className="h-10 rounded-md bg-blue-600 px-6 font-semibold text-slate-100 hover:bg-blue-600/70 disabled:bg-blue-600/20 2xl:px-12"
                    onClick={() => handleMaSucceedEvent()}
                    disabled={
                      event.condition != "choice"
                        ? Object.keys(playCards).includes(event.condition)
                          ? false
                          : true
                        : false
                    }
                  >
                    Enfrentar
                  </Button>
                  {/* {actionPoints <= 0 ? (
                  <span className="absolute bottom-12 text-red-500">
                    No tienes puntos de acción
                  </span>
                ) : null} */}
                </section>
              </div>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default DailyEvent
