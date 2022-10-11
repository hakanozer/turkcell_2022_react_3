import React from 'react'
import { useParams } from 'react-router-dom'

function Detail() {

  const { pid, cid } = useParams()  
  console.log( pid, cid );

  return (
    <>
    <h1> { pid } - { cid } </h1>
      <div>Detail</div>
    </>
  )
}

export default Detail