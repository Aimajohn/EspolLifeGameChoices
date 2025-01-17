import { mazo } from "@/types"
import Card from "@/components/Card"
import PseudoCard from "@/components/PseudoCard"
import { useEffect } from "react"

type Props = {
  tableCards: mazo
}

function Table({ tableCards }: Props) {
  return (
    <div className="rounded-lgp-6 flex w-full justify-center gap-4">
      {Object.values(tableCards).map((carta) =>
        carta.src != "" ? (
          <div key={carta.id} className="w-32">
            <Card info={carta} id={carta.id} />
          </div>
        ) : (
          <div key={carta.id} className="w-32 overflow-clip">
            <PseudoCard info={carta} id={carta.id} />
          </div>
        ),
      )}
    </div>
  )
}

export default Table
