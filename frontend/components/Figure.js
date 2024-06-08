import React from 'react'

function Figure({imageUrl}) {
  return (
    <div>
        <img src={imageUrl} alt='It is the NASA Image' />
    </div>
  )
}

export default Figure