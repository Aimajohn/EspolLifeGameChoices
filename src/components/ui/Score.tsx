import { mazo } from "@/types"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"

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

  const categorias = ["conocimiento", "energia", "social", "money"] as const
  const [Score, setScore] = useState(base)

  const calcScore = (tablero: mazo) => {
    let values = {
      conocimiento: 0,
      energia: 0,
      social: 0,
      money: 0,
    }
    if (Object.values(tablero).length == 0) return values

    Object.values(tablero).forEach((carta) => {
      categorias.forEach(
        (categoria) =>
          (values = {
            ...values,
            [categoria]: (values[categoria] += carta[categoria]),
          }),
      )
    })
    console.log("3,", values)

    return values
  }
  useEffect(() => {
    setScore(calcScore(tableCards))
  }, [tableCards])

  return (
    <div className="mt-2 flex w-32 flex-col flex-wrap gap-2">
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
