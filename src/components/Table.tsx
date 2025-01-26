import Card from "@/components/Card"
import PseudoCard from "@/components/PseudoCard"
import { useCardStore } from "@/AStore/AStore"

type Props = {}

function Table({}: Props) {
  const tableCards = useCardStore((state) => state.tableCards)

  return (
    <div className="-mt-4 flex w-full justify-center gap-4 rounded-lg">
      {Object.values(tableCards).map((carta) =>
        carta.src != "" ? (
          <div key={carta.id} className="w-[22%]">
            <Card
              maInfo={{
                conocimiento: carta.conocimiento,
                social: carta.social,
                money: carta.money,
                energia: carta.energia,
              }}
              src={carta.src}
              id={carta.id}
            />
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
