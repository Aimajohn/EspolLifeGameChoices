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
          <div key={carta.id} className="w-32 2xl:w-36">
            <Card info={carta} id={carta.id} />
          </div>
        ) : (
          <div key={carta.id} className="h-52 w-40 overflow-hidden">
            <div className="-ml-5 -mt-10 scale-[70%]">
              <div className="h-72 w-52">
                <PseudoCard info={carta} id={carta.id} />
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default Table
