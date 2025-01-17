import React from "react"
import { CartaT } from "@/types"
import { Badge } from "@/components/ui/badge"

type Props = {
  id: string
  info: CartaT
  seleccionado?: React.Dispatch<React.SetStateAction<CartaT | null>>
}

function PseudoCard({ info, seleccionado }: Props) {
  const categories = ["conocimiento", "energia", "social", "money"] as const

  return (
    <div
      className="mx-1 flex h-full w-full flex-col flex-wrap items-center rounded-lg border-4 border-blue-700 bg-blue-200 p-2 text-slate-900"
      onClick={() =>
        seleccionado ? seleccionado(info) : console.log("cagaste mano")
      }
    >
      <p className="text-xl">{info.CardName}</p>
      <div className="mx-auto my-3 size-16 bg-blue-700"></div>
      <div className="max-w-[8rem] overflow-clip">
        <p className="h-30 block text-ellipsis">{info.description}</p>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
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
  )
}

export default PseudoCard
