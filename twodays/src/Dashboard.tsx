import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

function Dashboard() {

  // use loccation
  const location = useLocation()
  const data = location.state
  if ( data ) {
    console.log( data );
    const { name, year, status } = data
    console.log( name, year, status )
   }
  
  

  const urls = [
    { id: 100, title: 'iPhone' },
    { id: 110, title: 'Buzbolabı' },
    { id: 120, title: 'TV' },
    { id: 130, title: 'Bisiklet' },
    { id: 140, title: 'Samsung Phone' },
  ]

  return (
    <>
        <div>Dashboard</div>
        { urls.map( (item, index) => 
            <li key={index}> <NavLink to={'/detail/'+item.id+'/'+index}> { item.title } </NavLink> </li>
        )}
    </>
  )
}

export default Dashboard