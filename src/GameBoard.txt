// GameBoard.tsx - Componente principal del juego
import React, { useState } from "react"
import { PlayerStats, Card, EventType } from "../src/types"

const initialPlayerStats: PlayerStats = {
  knowledgeAcademic: 60,
  socialRelations: 60,
  mentalHealth: 60,
  energy: 60,
  economicResources: 60,
}

const initialDeck: Card[] = [
  {
    id: "1",
    type: "action",
    name: "Estudiar intensamente",
    effect: [{ stat: "knowledgeAcademic", value: 10 }],
    description: "Aumenta tu conocimiento académico.",
  },
  {
    id: "2",
    type: "item",
    name: "Café energizante",
    effect: [{ stat: "energy", value: 15 }],
    description: "Recuperas energía para continuar.",
  },
  // Agrega más cartas según sea necesario
]

export const GameBoard: React.FC = () => {
  const [playerStats, setPlayerStats] =
    useState<PlayerStats>(initialPlayerStats)
  const [currentTurn, setCurrentTurn] = useState(1)
  const [actionPoints, setActionPoints] = useState(3)
  const [cardsInHand, setCardsInHand] = useState<Card[]>([])
  const [deck, setDeck] = useState<Card[]>([...initialDeck])
  const [currentEvent, setCurrentEvent] = useState<EventType | null>(null)
  const [isGameOver, setIsGameOver] = useState(false)

  const drawCard = () => {
    if (deck.length > 0 && actionPoints > 0) {
      const randomIndex = Math.floor(Math.random() * deck.length)
      const drawnCard = deck[randomIndex]
      setDeck(deck.filter((_, index) => index !== randomIndex))
      setCardsInHand([...cardsInHand, drawnCard])
      setActionPoints(actionPoints - 1)
    }
  }

  const playCard = (card: Card) => {
    if (actionPoints > 0) {
      const updatedStats = { ...playerStats }
      card.effect.forEach(({ stat, value }) => {
        updatedStats[stat] = Math.max(
          0,
          Math.min(100, updatedStats[stat] + value),
        )
      })
      setPlayerStats(updatedStats)
      setCardsInHand(cardsInHand.filter((c) => c.id !== card.id))
      setActionPoints(actionPoints - 1)
    }
  }

  //   const rollEvent = () => {
  //     const diceRoll = Math.floor(Math.random() * 6) + 1
  //     if (diceRoll <= 2) setCurrentEvent("academic")
  //     else if (diceRoll <= 4) setCurrentEvent("social")
  //     else if (diceRoll === 5) setCurrentEvent("health")
  //     else setCurrentEvent("economic")
  //   }

  const endTurn = () => {
    if (currentTurn < 5) {
      setCurrentTurn(currentTurn + 1)
      setActionPoints(3)
      setCurrentEvent(null)
    } else {
      setIsGameOver(true)
    }
  }

  const checkVictory = (): boolean => {
    const { knowledgeAcademic, ...otherStats } = playerStats
    const highStats = Object.values(otherStats).filter((stat) => stat >= 60)
    return knowledgeAcademic >= 70 && highStats.length >= 2
  }

  if (isGameOver) {
    return (
      <div className="game-over">
        <h2>{checkVictory() ? "¡Victoria!" : "Derrota"}</h2>
        <p>Conocimiento Académico final: {playerStats.knowledgeAcademic}%</p>
      </div>
    )
  }

  return (
    <div className="game-board">
      <div className="stats-panel">
        <h3>
          Días antes del examen {currentTurn}/5 <br /> Puntos de Acción:{" "}
          {actionPoints}
        </h3>
        <div className="stats">
          {Object.entries(playerStats).map(([stat, value]) => (
            <div key={stat} className="stat-bar">
              <label>
                {stat}: {value}%
              </label>
              <progress value={value} max={100} />
            </div>
          ))}
        </div>
      </div>

      {currentEvent && (
        <div className="event-card">
          <h4>Evento: {currentEvent}</h4>
        </div>
      )}

      <div className="hand">
        {cardsInHand.map((card) => (
          <div key={card.id} className="card" onClick={() => playCard(card)}>
            <h4>{card.name}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <div className="actions">
        <button onClick={drawCard} disabled={actionPoints === 0}>
          Robar Carta
        </button>
        <button onClick={endTurn}>Finalizar Turno</button>
      </div>
    </div>
  )
}
