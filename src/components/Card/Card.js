import React from 'react'

function Card({item}) {
  return (
    <div className='card'>
      <strong>{item.title}</strong>
    </div>
  )
}

export default Card