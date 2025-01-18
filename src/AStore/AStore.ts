import { create } from "zustand"
import {
  CartaT,
  infoInicial,
  deepCopy,
  mazo,
  calcScore,
  PlayerInfoT,
  initialHand,
} from "@/types"
import MazoCartas from "@/assets/cartas.json"

interface CardStore {
  playDeck: CartaT[]
  tableCards: mazo
  playCards: mazo
  setInitialDeck: () => Promise<void>
  handleTableCards: (card: CartaT) => void
  cleanTable: () => void
  cleanCardStore: () => void
  handleMaze: () => void
  setPlayCards: (misCartas: mazo) => void
}

interface StatStore {
  actionPoints: number
  setActionPoints: (numero: number) => void
  currentTurn: number
  endTurn: () => void
  setInitialStats: () => void
  playerInfo: PlayerInfoT
  isGameOver: boolean
  cleanStatStore: () => void
  setIsGameOver: () => void
}

const StatStoreInitiall = {
  playerInfo: {} as PlayerInfoT,
  actionPoints: 3,
  currentTurn: 5,
  isGameOver: false,
}

const CardStoreInitial = {
  playDeck: [],
  tableCards: {},
  playCards: {},
}
export const useCardStore = create<CardStore>((set, get) => ({
  playDeck: [],
  tableCards: {},
  playCards: {},
  setPlayCards: (misCartas: mazo) => {
    set(() => ({ playCards: misCartas }))
  },
  setInitialDeck: async () => {
    try {
      const maCopy = await deepCopy(MazoCartas)
      const initHand = await deepCopy(initialHand)
      set(() => ({ playDeck: Object.values(maCopy) }))
      set(() => ({ playCards: initHand }))
    } catch {
      console.warn("no se hizo bien la deepCopy")
      const mazoCompleto = MazoCartas as mazo
      set(() => ({ playDeck: Object.values(mazoCompleto) }))
    }
  },
  handleTableCards: (card: CartaT) => {
    set((state) => ({ tableCards: { ...state.tableCards, [card.id]: card } }))
  },
  handleMaze: () => {
    const { actionPoints, setActionPoints } = useStatStore.getState()
    // const setActionPoints = useStatStore((state) => state.setActionPoints)
    const { playDeck } = get()
    if (playDeck.length > 0 && actionPoints > 0) {
      const randomIndex = Math.floor(Math.random() * playDeck.length)
      const drawnCard = playDeck[randomIndex]
      const newPlayDeck = playDeck.filter((_, index) => index !== randomIndex)
      set(() => ({ playDeck: newPlayDeck }))
      set((state) => ({
        playCards: { ...state.playCards, [drawnCard.id]: drawnCard },
      }))
      setActionPoints(-1)
    }
  },
  cleanTable: () => {
    set(() => ({ tableCards: {} }))
  },
  cleanCardStore: () => {
    set(() => ({ ...CardStoreInitial }))
  },
}))

export const useStatStore = create<StatStore>((set, get) => ({
  actionPoints: 3,
  playerInfo: {} as PlayerInfoT,
  currentTurn: 5,
  isGameOver: false,
  setActionPoints: (numero: number) =>
    set({ actionPoints: get().actionPoints + numero }),
  setInitialStats: async () => {
    try {
      const initiStats = await deepCopy(infoInicial)
      set(() => ({ playerInfo: initiStats }))
    } catch {
      console.error("no se hizo deepCopy")
      set(() => ({ playerInfo: infoInicial }))
    }
  },
  cleanStatStore: () => {
    set(() => ({ ...StatStoreInitiall }))
  },
  setIsGameOver: () => {
    set((state) => ({ isGameOver: !state.isGameOver }))
  },
  endTurn: () => {
    const { tableCards, cleanTable } = useCardStore.getState()
    // const cleanTable = useCardStore((state) => state.cleanTable)
    const { currentTurn } = get()
    if (currentTurn > 0) {
      set((state) => ({ currentTurn: state.currentTurn - 1 }))
      set(() => ({ actionPoints: 3 }))
      const tableScore = calcScore(tableCards)
      if (Object.values(tableCards).length != 0) {
        set((state) => ({
          playerInfo: {
            conocimiento:
              state.playerInfo.conocimiento + tableScore.conocimiento,
            energia: state.playerInfo.energia + tableScore.energia,
            social: state.playerInfo.social + tableScore.social,
            money: state.playerInfo.money + tableScore.money,
          },
        }))
        cleanTable()
      }
    } else {
      const { setIsGameOver } = get()
      setIsGameOver()
    }
  },
}))
