import React from 'react'
import "./ComponentHeader.css"
function CardHeader ({heading, title}) {
  return (
     <div className='componentHeader__container'>
        <h4 className='componentHeader__heading'>{heading}</h4>
        <h2 className='componentHeader__title'>{title}</h2>
      </div>
  )
}
export default CardHeader
