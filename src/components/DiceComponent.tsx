import React, { useState } from "react"
import { Button } from "./ui/button"
import { useStatStore } from "@/AStore/AStore"
import Victoria from "@/assets/VictoriaTask.png"
import Fracaso from "@/assets/FracasoTask.png"
import { categories, CartaRetoT } from "@/types"
import { VscDebugRestart } from "react-icons/vsc"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Badge } from "./ui/badge"

type Props = {
  selected: CartaRetoT | null
  setSelected: React.Dispatch<React.SetStateAction<CartaRetoT | null>>
}

const DiceComponent = ({ selected }: Props) => {
  const rollDice = useStatStore((state) => state.rollDice)
  const rotation = useStatStore((state) => state.rotation)
  const Intentos = useStatStore((state) => state.Intentos)
  const reiniciarDice = useStatStore((state) => state.reiniciarDice)
  const setActionPoints = useStatStore((state) => state.setActionPoints)
  const playTask = useStatStore((state) => state.playTask)
  const [isOver, setIsOver] = useState(false)

  const diceColor = "#eee"
  const dotColor = "#1a1a1a"

  const handleCardAction = (selected: CartaRetoT | null) => {
    if (!selected) return null
    const random = Math.max(...Intentos) >= 10
    const plusPoints = random ? selected.succeed : selected.fail
    playTask(plusPoints)
  }

  const [isUsed, setIsUsed] = useState(false)

  const reiniciar = () => {
    reiniciarDice()
    setTimeout(() => {
      setIsUsed(false)
    }, 800)
    // const rnd = 4 as side
    // const rnd2 = 3 as side
  }
  const playDice = () => {
    rollDice()

    setTimeout(() => {
      setIsUsed(true)
    }, 800)
    // const rnd = 6 as side
    // const rnd2 = 1 as side
  }

  type side = 1 | 2 | 3 | 4 | 5 | 6

  const getDots = (side: side) => {
    const positions = {
      1: [{ row: 2, col: 2 }],
      2: [
        { row: 1, col: 1 },
        { row: 3, col: 3 },
      ],
      3: [
        { row: 1, col: 1 },
        { row: 2, col: 2 },
        { row: 3, col: 3 },
      ],
      4: [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 3, col: 1 },
        { row: 3, col: 3 },
      ],
      5: [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 2, col: 2 },
        { row: 3, col: 1 },
        { row: 3, col: 3 },
      ],
      6: [
        { row: 1, col: 1 },
        { row: 1, col: 3 },
        { row: 2, col: 1 },
        { row: 2, col: 3 },
        { row: 3, col: 1 },
        { row: 3, col: 3 },
      ],
    }

    return positions[side] || []
  }

  const awa = [1, 2, 3, 4, 5, 6] as side[]
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-6">
        <div className="relative h-52 w-52" style={{ perspective: "400px" }}>
          <div
            className="absolute h-52 w-52 transform transition-transform duration-700"
            style={{
              transform: `translateZ(-100px) rotateY(${rotation.x}deg) rotateX(${rotation.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {awa.map((side) => (
              <div
                key={side}
                className="absolute grid h-52 w-52 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: diceColor,
                  gridTemplateRows: "repeat(3, 1fr)",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  transform: [
                    "rotateX(-450deg) translateZ(100px)",
                    "rotateY(540deg) translateZ(100px)",
                    "rotateY(450deg) translateZ(100px)",
                    "rotateY(360deg) translateZ(100px)",
                    "rotateY(-450deg) translateZ(100px)",
                    "rotateX(450deg) translateZ(100px)",
                  ][side - 1],
                  transformStyle: "preserve-3d",
                }}
              >
                {getDots(side).map((pos, index) => (
                  <span
                    key={index}
                    className="mx-auto block h-6 w-6 rounded-full border-2 border-slate-500 border-opacity-30 drop-shadow-lg"
                    style={{
                      backgroundColor: dotColor,
                      gridRow: pos.row,
                      gridColumn: pos.col,
                    }}
                  ></span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-52 w-52" style={{ perspective: "400px" }}>
          <div
            className="absolute h-52 w-52 transform transition-transform duration-700"
            style={{
              transform: `translateZ(-100px) rotateY(${rotation.w}deg) rotateX(${rotation.z}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {awa.map((side) => (
              <div
                key={side}
                className="absolute grid h-52 w-52 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: diceColor,
                  gridTemplateRows: "repeat(3, 1fr)",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  transform: [
                    "rotateX(-450deg) translateZ(100px)",
                    "rotateY(540deg) translateZ(100px)",
                    "rotateY(450deg) translateZ(100px)",
                    "rotateY(360deg) translateZ(100px)",
                    "rotateY(-450deg) translateZ(100px)",
                    "rotateX(450deg) translateZ(100px)",
                  ][side - 1],
                  transformStyle: "preserve-3d",
                }}
              >
                {getDots(side).map((pos, index) => (
                  <span
                    key={index}
                    className="mx-auto block h-6 w-6 rounded-full border-2 border-slate-500 border-opacity-30 drop-shadow-lg"
                    style={{
                      backgroundColor: dotColor,
                      gridRow: pos.row,
                      gridColumn: pos.col,
                    }}
                  ></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center space-y-4">
        {Intentos.length < 3 && (
          <Button disabled={isUsed ? true : false} onClick={playDice}>
            Lanzar dados!
          </Button>
        )}
        {Intentos.length >= 3 && (
          <div className="absolute top-[40%] -mt-4 flex flex-col gap-2 rounded-md bg-slate-900/60 p-6">
            <span>Ya no tienes mas oportunidades</span>
            <Button className="bg-red-950" onClick={() => setIsOver(true)}>
              Aceptar
            </Button>
          </div>
        )}
        {isUsed && Intentos.length < 3 && (
          <Button
            className="absolute top-[40%] flex items-center bg-slate-400 hover:bg-slate-600"
            onClick={reiniciar}
          >
            <VscDebugRestart size={20} />
            <span>Reiniciar</span>
          </Button>
        )}
      </div>
      <div
        className={`${isOver ? "flex" : "hidden"} absolute top-0 h-full w-full items-center justify-center bg-gray-900/80`}
      >
        <span className="flex w-4/5 flex-col rounded-sm bg-slate-950/90 px-6 py-4 text-center font-semibold text-slate-200">
          <h2>{Math.max(...Intentos) >= 10 ? "Victoria" : "Fracaso"}</h2>
          <span className="my-2 text-sm font-light">
            {Math.max(...Intentos) >= 10
              ? "Felicidades, la tarea resultó ser desafiante, pero conseguiste terminarla y ganar los puntos extra"
              : "La tarea resulto mas dificil de lo que pensabas y no pudiste terminarla a tiempo, no recibes bonificaciones"}
          </span>
          <span className="mx-auto flex w-min gap-2">
            {[
              categories.map((a) =>
                !selected ? null : Math.max(...Intentos) >= 10 ? (
                  selected.succeed[a] != 0 ? (
                    <Badge puntos={selected.succeed[a]} variant={a}>
                      {a == "money" ? "Dinero" : a}
                    </Badge>
                  ) : null
                ) : selected.succeed[a] != 0 ? (
                  <Badge puntos={selected.fail[a]} variant={a}>
                    {a == "money" ? "Dinero" : a}
                  </Badge>
                ) : null,
              ),
            ]}
          </span>
          <span className="mx-auto mt-2 w-3/5 overflow-hidden rounded-lg">
            <img src={Math.max(...Intentos) >= 10 ? Victoria : Fracaso} />
          </span>
          <DialogPrimitive.Close
            className="mx-auto mt-4 w-2/5 rounded-md bg-blue-600 py-2 hover:bg-blue-800"
            onClick={() => handleCardAction(selected)}
          >
            Aceptar
          </DialogPrimitive.Close>
        </span>
      </div>
    </div>
  )
}

export default DiceComponent
