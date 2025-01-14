import cardData from "../assets/cartas.json"

function Card({src, title, id, seleccionado}) {
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
      <img title={title} className='w-full' src={src}/>
      </div>
    </div>
  )
}

export default Card