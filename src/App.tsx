import { useState, useRef, useEffect } from 'react'
import './App.css'
import Card from '@/componentes/Card'
import { Button } from "@/components/ui/button"
import cardData from "@/assets/cartas.json"

import { Copy } from "lucide-react"
 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type carta = {
  id: string,
  CardName: string
  description: string 
  src: string 
  energia: number 
  money: number 
  conocimiento: number 
  social: number  
}



function App() {
  const [selected, setSelected] = useState<carta|null>(null)
  const [playerInfo, setPlayerInfo] = useState({
    "energia": 50,
    "money": 50,
    "conocimiento": 50,
    "social": 50
  })

  useEffect(() => {
    // setChecked(true)
    
  }, [selected])

  const handleSelected = ()=>{
    // seleccionado.current = null
    setSelected(null)
  }

  const misCartas = []

  for(const carta in cardData){
    misCartas.push(
      <div className='w-32'>
        <Card title={cardData[carta].title} id={carta} url={cardData[carta].src} seleccionado={setSelected}/>
      </div>
    )
  }

  const handleCardAction = (e)=>{
    const maData = playerInfo
    maData.conocimiento += selected?.conocimiento
    maData.energia += selected?.energia
    maData.social += selected?.social
    maData.money += selected?.money

    setSelected(null)
  }
  const handleCardBack = (e)=>{
    setSelected(null)
  }

  return (
    <>
    <div className='relative w-full min-h-svh bg-[url("/src/assets/FondoEspol.jpg")] bg-no-repeat bg-cover'>
    <div className='flex gap-2 p-4 flex-wrap'>
      <Button className='bg-green-600'> Energía {playerInfo.energia}</Button>
      <Button className='bg-orange-500'> Conocimiento {playerInfo.conocimiento}</Button>
      <Button className='bg-purple-700'> Relaciones Sociales {playerInfo.social}</Button>
      <Button className='bg-yellow-500'> Dinero {playerInfo.money}</Button>
    </div>
    {selected && 
        <div className='absolute w-full h-full bg-slate-500 bg-opacity-80 text-center' >
        <div className='w-72 mx-auto mt-40' onClick={()=>handleSelected()}>
        <Card url={selected.src} id={selected} title={selected.title} seleccionado={setSelected}/>
        </div>
        <Button className='mr-6' onClick={(e)=>handleCardBack(e)}>
          Atrás
        </Button>
        <Button  onClick={(e)=>handleCardAction(e)}>
          Aplicar
        </Button>
      </div>
      }
    <div className='flex flex-wrap gap-2'>
      {...misCartas}
    </div>


      

    </div>
    </>
  )
}

export default App
