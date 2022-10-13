import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ProBilgiler } from './models/IProduct'
import { addBasket } from './service'

function ProductDetail() {
  
  const navigate = useNavigate()  
  const { state } = useLocation()
  const [item, setItem] = useState<ProBilgiler>()
  const [bigImage, setBigImage] = useState('')
  useEffect(() => {
    if ( state ) {
        try {
            const proBilgi = state as ProBilgiler
            setBigImage( proBilgi.images[0].normal )
            setItem( proBilgi )
        } catch (error) {
            navigate('/dashboard')
        }
    }else {
        navigate('/dashboard')
    }
  }, [])
  
  
  const fncAddBasket = () => {
    const basket = addBasket(item!.productId)
    if ( basket ) {
        basket.then(res => {
            const status = res.data.order[0].durum
            if ( status ) {
                toast.success('Add Basket Success')
            }else {
                toast.error('Basket Fail')
            }
        })
    }
  }

  return (
    <>
        { item &&
            <>
                <h2> { item.productName } </h2>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={bigImage} className='img-fluid'></img>
                        <div>
                            { item.images.map( (itm, index) =>
                                <img onClick={(evt) => setBigImage(itm.normal) } role='button' key={index} src={ itm.thumb } className='img-thumbnail m-1'></img>
                            )}
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <h2><span className="badge bg-danger"> { item.price }₺ </span></h2>
                        <div dangerouslySetInnerHTML={ {__html: item.description}  }></div>
                        <button onClick={fncAddBasket} className='btn btn-warning text-light'><i className="bi bi-cart-check"></i> Add Basket</button>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default ProductDetail