// types.ts - Definición de tipos para el juego
export interface PlayerStats {
  knowledgeAcademic: number
  socialRelations: number
  mentalHealth: number
  energy: number
  economicResources: number
}

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
export interface Card {
  id: string
  type: "action" | "item" | "character"
  name: string
  effect: {
    stat: keyof PlayerStats
    value: number
  }[]
  description: string
  imageUrl?: string
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

export interface PlayerStats {
  knowledgeAcademic: number
  socialRelations: number
  mentalHealth: number
  energy: number
  economicResources: number
}

export interface Card {
  id: string
  type: "action" | "item" | "character"
  name: string
  effect: {
    stat: keyof PlayerStats
    value: number
  }[]
  description: string
  imageUrl?: string
}
