import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { calcScore, categorias } from "@/types"
import { useCardStore } from "@/AStore/AStore"

type Props = {}
const base = {
  conocimiento: 0,
  energia: 0,
  social: 0,
  money: 0,
}

function Score({}: Props) {
  const tableCards = useCardStore((state) => state.tableCards)
  //   const [values, setValues] = useState(base)

  const [Score, setScore] = useState(base)

  useEffect(() => {
    setScore(calcScore(tableCards))
  }, [tableCards])

  return (
    <div className="mt-2 flex justify-end gap-2">
      {[
        categorias.map((a) =>
          Score[a] != 0 ? (
            <Badge
              className="py-0 text-[.5rem] 2xl:py-1 2xl:text-sm"
              key={a}
              puntos={Score[a]}
              variant={a}
            >
              {a == "money" ? "Dinero" : a}
            </Badge>
          ) : null,
        ),
      ]}
    </div>
  )
}

export default Score
