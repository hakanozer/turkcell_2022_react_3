import React, { useEffect, useState } from 'react'
import { allProduct } from './service'

function Dashboard() {

  const [search, setSearch] = useState('')
  useEffect(() => {
    allProduct().then( res => {
      const arr = res.data.Products[0].bilgiler
      console.log( arr );
    })
  },[])


  useEffect(() => {
  },[search])
  

  return (
    <>
      <div className='mb-3 mt-3'>
        <input onChange={(evt) => setSearch(evt.target.value)} type='search' className='form-control' placeholder='Search..'></input>
      </div>
    </>
  )
  
}

export default Dashboard