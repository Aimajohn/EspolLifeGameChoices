import { create } from "zustand"
import { CartaT, infoInicial, deepCopy } from "@/types"
import MazoCartas from "@/assets/cartas.json"

export const cardStore = create((set, get) => ({
  playDeck: [],
  tableCards: [],
  playCards: [],
  setInitialDeck: async () => {
    try {
      const maCopy = await deepCopy(MazoCartas)
      set({ playDeck: Object.values(maCopy) })
    } catch {
      console.warn("no se hizo bien la deepCopy")
      set({ playDeck: Object.values(MazoCartas) })
    }
  },
}))

export const statStore = create((set) => ({
  playerInfo: infoInicial,
  currentTurn: 5,
  actionPoints: 3,
  isGameOver: false,
}))
