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

interface dices {
  x: number
  y: number
  z: number
  w: number
}

interface StatStore {
  actionPoints: number
  setActionPoints: (numero: number) => void
  currentTurn: number
  isTaskDone: boolean
  Intentos: number[]
  endTurn: () => void
  setInitialStats: () => void
  playerInfo: PlayerInfoT
  isGameOver: boolean
  cleanStatStore: () => void
  setIsGameOver: () => void
  playTask: (selected: PlayerInfoT) => void
  rotation: dices
  rollDice: () => number[]
  reiniciarDice: () => void
}

const StatStoreInitiall = {
  playerInfo: {} as PlayerInfoT,
  actionPoints: 3,
  currentTurn: 5,
  isGameOver: false,
  Intentos: [],
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

type StatAnimation = {
  turnos: boolean
  acciones: boolean
  descartes: boolean
  setTurnos: () => void
  setAcciones: () => void
  setDescartes: () => void
}

export const useStatAnimation = create<StatAnimation>((set) => ({
  turnos: false,
  acciones: false,
  descartes: false,
  setTurnos: () => {
    set(() => ({ turnos: true }))
    setTimeout(() => {
      set(() => ({ turnos: false }))
    }, 1000)
  },
  setAcciones: () => {
    set(() => ({ acciones: true }))
    setTimeout(() => {
      set(() => ({ acciones: false }))
    }, 1000)
  },
  setDescartes: () => {
    set(() => ({ descartes: true }))
    setTimeout(() => {
      set(() => ({ descartes: false }))
    }, 1000)
  },
}))

export const useStatStore = create<StatStore>((set, get) => ({
  rotation: { x: 720, y: 810, w: 720, z: 810 },
  actionPoints: 3,
  playerInfo: {} as PlayerInfoT,
  currentTurn: 5,
  isGameOver: false,
  isTaskDone: false,
  Intentos: [] as number[],
  rollDice: () => {
    const rnd = Math.floor(Math.random() * 6) + 1
    const rnd2 = Math.floor(Math.random() * 6) + 1
    let x1, y2, w2, z2
    switch (rnd) {
      case 1:
        x1 = 360
        y2 = 90
        break
      case 6:
        x1 = 0
        y2 = 270
        break
      default:
        x1 = 90 * rnd > 360 ? 90 * rnd - 360 : 90 * rnd
        y2 = 1800
        break
    }
    switch (rnd2) {
      case 1:
        w2 = 0
        z2 = 90
        break
      case 6:
        w2 = 0
        z2 = 270
        break
      default:
        w2 = 90 * rnd2 > 360 ? 90 * rnd2 - 360 : 90 * rnd2
        z2 = 1800
        break
    }
    set(() => ({
      rotation: { x: x1, y: y2, w: w2, z: z2 },
    }))
    set((state) => ({ Intentos: [...state.Intentos, rnd + rnd2] }))

    return [rnd, rnd2]
  },
  reiniciarDice: () => {
    const initialRotation1 = { x: 720, y: 810, w: 720, z: 810 }
    set(() => ({ rotation: initialRotation1 }))
  },
  setActionPoints: (numero: number) => {
    const { setAcciones } = useStatAnimation.getState()
    setAcciones()
    set({ actionPoints: get().actionPoints + numero })
  },
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
    const { setTurnos } = useStatAnimation.getState()
    // const cleanTable = useCardStore((state) => state.cleanTable)
    setTurnos()
    const { currentTurn } = get()
    set((state) => ({ currentTurn: state.currentTurn - 1 }))
    set(() => ({ actionPoints: 3 }))
    const tableScore = calcScore(tableCards)
    if (Object.values(tableCards).length != 0) {
      set((state) => ({
        playerInfo: {
          conocimiento: state.playerInfo.conocimiento + tableScore.conocimiento,
          energia: state.playerInfo.energia + tableScore.energia,
          social: state.playerInfo.social + tableScore.social,
          money: state.playerInfo.money + tableScore.money,
        },
      }))
      cleanTable()
    }
    if (currentTurn <= 0) {
      const { setIsGameOver } = get()
      setIsGameOver()
    }
  },
  playTask: (selected: PlayerInfoT) => {
    set((state) => ({
      playerInfo: {
        conocimiento: state.playerInfo.conocimiento + selected.conocimiento,
        energia: state.playerInfo.energia + selected.energia,
        social: state.playerInfo.social + selected.social,
        money: state.playerInfo.money + selected.money,
      },
    }))
  },
}))
