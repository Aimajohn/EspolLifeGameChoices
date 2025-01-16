import { Button } from "@/components/ui/button"
import React from "react"
import Card from "./Card"
import { CartaT } from "@/types"
import { PlayerInfoT, mazo } from "@/types"

type Props = {
  setSelected: React.Dispatch<React.SetStateAction<CartaT | null>>
  selected: CartaT
  playerInfo: PlayerInfoT
  setPlayerInfo: React.Dispatch<React.SetStateAction<PlayerInfoT>>
  setActionPoints: React.Dispatch<React.SetStateAction<number>>
  setPlayCards: React.Dispatch<React.SetStateAction<mazo>>
  actionPoints: number
  playCards: mazo
}

function SelectedCard({
  setSelected,
  playCards,
  selected,
  playerInfo,
  setPlayerInfo,
  setActionPoints,
  setPlayCards,
  actionPoints,
}: Props) {
  const handleSelected = () => {
    // seleccionado.current = null
    setSelected(null)
  }

  const handleCardAction = () => {
    if (actionPoints > 0) {
      const maData = playerInfo
      if (!selected) return null
      maData.conocimiento += selected?.conocimiento
      maData.energia += selected?.energia
      maData.social += selected?.social
      maData.money += selected?.money
      setPlayerInfo(maData)
      setActionPoints(actionPoints - 1)
      let helperSet = playCards
      delete helperSet[selected.id]
      setPlayCards(helperSet)
      setSelected(null)
    }
  }
  const handleCardBack = () => {
    setSelected(null)
  }

  return (
    <div className="absolute top-0 z-10 h-full w-full bg-slate-500 bg-opacity-80 text-center">
      <div className="mx-auto mt-40 w-72" onClick={() => handleSelected()}>
        <Card id={selected.id} info={selected} seleccionado={setSelected} />
      </div>
      <Button className="mr-6" onClick={() => handleCardBack()}>
        Atrás
      </Button>
      <Button onClick={() => handleCardAction()}>Aplicar</Button>
    </div>
  )
}

export default SelectedCard
