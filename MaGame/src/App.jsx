import { useState, useRef, useEffect } from 'react'
import './App.css'
import Card from './componentes/Card'

import card001 from "./assets/CafeSuit&Cofi.png"
import card002 from "./assets/LibroPesado.png"
import card003 from "./assets/TrabajaGrupo.png"
import card004 from "./assets/AmigoFiestero.png"
import cardData from "./assets/cartas.json"

function App() {
  const [selected, setSelected] = useState(0)
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
    setSelected(0)
  }

  

  return (
    <>
    <div className='relative w-full min-h-svh bg-[url("/src/assets/FondoEspol.jpg")] bg-no-repeat bg-cover'>
      
      {selected!= 0 && 
        <div className='absolute w-full h-full bg-slate-500 bg-opacity-80' onClick={()=>handleSelected()}>
        <div className='w-72 mx-auto mt-40' >
        <Card src={selected.src} id={selected} title={selected.title} seleccionado={setSelected}/>
        </div>
      </div>
      }
    <div className='flex z-1'>
      <div className='w-52'>
      <Card src={card002} id={"003"}  title={"LibroPesado"} seleccionado={setSelected}/>

      </div>
      <div className='w-52'>
      <Card src={card003} id={"002"}  title={"TrabajaGrupo"} seleccionado={setSelected}/>

      </div>
    </div>

    </div>
    </>
  )
}

export default App
