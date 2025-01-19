export const playerInfo = {
  energia: 60,
  money: 30,
  conocimiento: 70,
  social: 40,
}

export type PlayerInfoT = {
  energia: number
  money: number
  conocimiento: number
  social: number
}

export const categories = [
  "conocimiento",
  "energia",
  "social",
  "money",
] as const

export interface CartaRetoT {
  id: string
  name: string
  difficulty: number
  description: string
  src: string
  requiredCard: PlayerInfoT
  requiredStat: {}
  fail: PlayerInfoT
  succeed: PlayerInfoT
}

export const infoInicial = {
  energia: 50,
  money: 60,
  conocimiento: 60,
  social: 70,
}
export type mazo = {
  [id: string]: CartaT
}

export const categorias = [
  "conocimiento",
  "energia",
  "social",
  "money",
] as const

export const deepCopy = async (cartas: any) => {
  try {
    const copia = await JSON.parse(JSON.stringify(cartas))
    return copia as mazo
  } catch {
    console.warn(" no salio bien")
  }
  return cartas
}

export const calcScore = (tablero: mazo) => {
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

export const initialHand = {
  "001": {
    id: "001",
    CardName: "Suit&Cofi",
    description: "Delicioso impulso energetico, aunque afecta tu presupuesto",
    src: "/EspolLifeGameChoices/assets/Cartas/CafeSuit&Cofi.png",
    energia: 2,
    money: -1,
    conocimiento: 0,
    social: 0,
  },
  "002": {
    id: "002",
    CardName: "Trabajo en Grupo",
    src: "/EspolLifeGameChoices/assets/Cartas/TrabajaGrupo.png",
    description: "Conecta con otros mientras creces académicamente.",
    conocimiento: 2,
    social: 2,
    money: 0,
    energia: 0,
  },
  "003": {
    id: "003",
    CardName: "Libro Pesado",
    src: "/EspolLifeGameChoices/assets/Cartas/LibroPesado.png",
    description: "Libro que contiene una enorme cantidad de conocimiento. ",
    energia: -2,
    money: 0,
    conocimiento: 5,
    social: 0,
  },
  "004": {
    id: "004",
    CardName: "Amigo Fiestero",
    src: "/EspolLifeGameChoices/assets/Cartas/AmigoFiestero.png",
    description:
      "Sensacional para conocer personas, aunque es un poco agotador.",
    energia: -2,
    money: 0,
    conocimiento: 0,
    social: 2,
  },
}

export type EventType = "academic" | "social" | "health" | "economic"

export type CartaT = {
  id: string
  CardName: string
  description: string
  src: string
  energia: number
  money: number
  conocimiento: number
  social: number
}
