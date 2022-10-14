import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { DataContext } from './DataContext'
import ProductItem from './inc/ProductItem'
import { ProBilgiler } from './models/IProduct'
import { allProduct } from './service'
import { SearchAction } from './useRedux/actions/SearchAction'
import { StateType } from './useRedux/store'
import { SearchType } from './useRedux/types/SearchType'

function Dashboard() {

  // use selector - pull data in redux
  const searchSelector = useSelector( (item:StateType) => item.SearchReducer )
  const dispath = useDispatch()

  const [proArr, setProArr] = useState<ProBilgiler[]>([])
  const [oldproArr, setoldProArr] = useState<ProBilgiler[]>([])
  useEffect(() => {
    const searchAction:SearchAction = {
      type: SearchType.SEARCH_CHANGE,
      payload: ''
    }
    dispath( searchAction )
    allProduct().then( res => {
      const arr = res.data.Products[0].bilgiler
      setProArr(arr)
      setoldProArr(arr)
    })
  },[])

  useEffect(() => {
    const search = searchSelector.toLowerCase()
    const searchArr = oldproArr.filter( (item) => 
      item.productName.toLowerCase().includes(search) || 
      item.price.includes(search) ||
      item.brief.toLowerCase().includes(search)
    )
    setProArr( searchArr )
  }, [searchSelector])
  
  const { getItem, setItem }  = useContext(DataContext)
  setItem({title: 'Products', color: '#000000'})
  

  return (
    <>
        <Helmet>
            <title>Product </title>
            <meta name='description' content='Page Product Content'></meta>
        </Helmet>
      <h2>Products</h2>
      <div className='row'>
        { proArr.map(( item, index ) => 
            <ProductItem data={item} key={index} />
        )}
      </div>
    </>
  )
  
}

export default Dashboard