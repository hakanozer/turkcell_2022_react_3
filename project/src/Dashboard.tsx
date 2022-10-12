import React, { useEffect, useState } from 'react'
import ProductItem from './inc/ProductItem'
import { ProBilgiler } from './models/IProduct'
import { allProduct } from './service'

function Dashboard() {

  const [search, setSearch] = useState('')
  const [proArr, setProArr] = useState<ProBilgiler[]>([])
  useEffect(() => {
    allProduct().then( res => {
      const arr = res.data.Products[0].bilgiler
      setProArr(arr)
    })
  },[])


  useEffect(() => {
  },[search])
  

  return (
    <>
      <div className='mb-3 mt-3'>
        <input onChange={(evt) => setSearch(evt.target.value)} type='search' className='form-control' placeholder='Search..'></input>
      </div>
      <div className='row'>
        { proArr.map(( item, index ) => 
            <ProductItem data={item} key={index} />
        )}
      </div>
    </>
  )
  
}

export default Dashboard