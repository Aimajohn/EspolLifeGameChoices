import { mazo } from "@/types"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { calcScore, categorias } from "@/types"

type Props = {
  tableCards: mazo
}
const base = {
  conocimiento: 0,
  energia: 0,
  social: 0,
  money: 0,
}

function Score({ tableCards }: Props) {
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
            <Badge key={a} puntos={Score[a]} variant={a}>
              {a == "money" ? "Dinero" : a}
            </Badge>
          ) : null,
        ),
      ]}
    </div>
  )
}

export default Score
