import { useStatAnimation, useStatStore } from "@/AStore/AStore"

type Props = {}

function TimeChart({}: Props) {
  const currentTurn = useStatStore((state) => state.currentTurn)
  const actionPoints = useStatStore((state) => state.actionPoints)
  const turnos = useStatAnimation((state) => state.turnos)
  const acciones = useStatAnimation((state) => state.acciones)
  const descartes = useStatAnimation((state) => state.descartes)
  return (
    <article className="flex w-full p-2 xl:p-4">
      <div className="grid w-full grow-0 grid-cols-2 gap-2 rounded-sm text-center text-sm text-slate-200/90 2xl:text-2xl">
        <div className="col-span-2 row-span-2 flex flex-col rounded-sm bg-blue-900/80">
          <span className="rounded-sm py-2 text-center">
            Días antes del exámen
          </span>
          <span className="relative mx-4 mb-2 rounded-sm bg-slate-950/70 py-4 text-center">
            {currentTurn}
            {turnos && (
              <span className="motion-preset-confetti motion-duration-1000 absolute top-0 flex h-full w-full items-center justify-center rounded-sm bg-red-950/90 font-semibold">
                -1
              </span>
            )}
          </span>
        </div>
        <div className="col-start-1 row-span-2 flex flex-col rounded-sm bg-blue-900/80">
          <span className="text-xl">Acciones</span>
          <span
            className={`relative mx-2 mb-2 flex aspect-video items-center justify-center rounded-sm bg-slate-900/80`}
          >
            {actionPoints}
            {acciones && (
              <span className="motion-preset-confetti motion-duration-1000 absolute flex h-full w-full items-center justify-center rounded-sm bg-red-950 font-semibold">
                -1
              </span>
            )}
          </span>
        </div>
        <div className="col-start-2 row-span-2 flex flex-col rounded-sm bg-blue-900/80">
          <span className="text-xl font-normal">Descartes</span>
          <span className="relative mx-2 flex aspect-video h-auto items-center justify-center rounded-sm bg-slate-900/80">
            5
            {true && (
              <span className="motion-preset-confetti motion-duration-1000 absolute flex h-full w-full items-center justify-center rounded-sm bg-red-950/90 font-semibold">
                -1
              </span>
            )}
          </span>
        </div>
      </div>
    </article>
  )
}

export default TimeChart
