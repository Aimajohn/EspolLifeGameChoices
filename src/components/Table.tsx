import { mazo } from "@/types"
import Card from "@/components/Card"
import PseudoCard from "@/components/PseudoCard"

type Props = {
  tableCards: mazo
}

function Table({ tableCards }: Props) {
  return (
    <div className="flex w-full justify-center gap-4 rounded-lg p-6">
      {Object.values(tableCards).map((carta) =>
        carta.src != "" ? (
          <div key={carta.id} className="w-36">
            <Card info={carta} id={carta.id} />
          </div>
        ) : (
          <div key={carta.id} className="w-36 overflow-clip">
            <PseudoCard info={carta} id={carta.id} />
          </div>
        ),
      )}
    </div>
  )
}

export default Table
