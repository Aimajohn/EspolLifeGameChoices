import React from "react"

type Props = {
  currentTurn: number
  actionPoints: number
}

function TimeChart({ currentTurn, actionPoints }: Props) {
  return (
    <article className="absolute top-8 flex w-full">
      <div className="text-md mx-auto flex grow-0 rounded-sm bg-gray-900 p-4 text-slate-200/90 2xl:p-6 2xl:text-2xl">
        <h2 className="items-centers flex flex-col">
          <span>
            Días antes del exámen {currentTurn}
            <br />
          </span>
          <span className={`flex justify-center`}>
            <span>Puntos de accion {actionPoints}</span>
          </span>
        </h2>
      </div>
    </article>
  )
}

export default TimeChart
