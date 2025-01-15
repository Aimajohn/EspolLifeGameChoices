import cardData from "../assets/cartas.json"

import React from 'react'

type Props = {
  url: string,
  title:  string,
  id: string,
  seleccionado: React.Dispatch<React.SetStateAction<null>>
}

function Card({url, title, id, seleccionado}: Props) {
  const handleCard = (e)=>{
    const carta = cardData[id]
    seleccionado(carta)
  }
  return (
    <div className="cursor-pointer" onClick={e => handleCard(e)}>
      <p>
      {title}
        </p>
      <div className=''>
      <img title={title} className='w-full' src={url}/>
      </div>
    </div>
  )
}

export default Card

 
