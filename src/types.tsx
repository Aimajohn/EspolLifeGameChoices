export const playerInfo = {
  energia: 70,
  money: 70,
  conocimiento: 68,
  social: 70,
}
export const infoInicial = {
  energia: 65,
  money: 70,
  conocimiento: 65,
  social: 70,
}
export type mazo = {
  [id: string]: CartaT
}

export type EventType = "academic" | "social" | "health" | "economic"

export type PlayerInfoT = {
  energia: number
  money: number
  conocimiento: number
  social: number
}

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
