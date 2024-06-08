import React from 'react'
import Figure from './Figure'
function Card(props) {
    const {title,explanation,date,imageUrl} = props
  return (
    <div>
        <h1>Title: {title}</h1>
        <p>Explaination: {explanation}</p>
        <Figure imageUrl={imageUrl}/>
        <p>{date}</p>
    </div>
  )
}

export default Card