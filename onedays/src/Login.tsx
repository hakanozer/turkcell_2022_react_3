import React from 'react'

function Login() {
  
  let name:string = ''
  name = 'Ali'
  const surname = 'Bilmem'

  const status = false
  if ( true ) {
    let x = 'x';
    var y = 'y'; // gövde dışında da kullanılabilir.
  }
  console.log( y )

  // Arrays
  let cities = [ 'İstanbul', 'İzmir', 'Ankara', 100, true, 101.1 ]
  cities.push('Samsun') // add item
  cities = [ 'İzmit',...cities, 'Antalya' ] // add item
  // remove item
  cities.splice(4, 1)

  // index
  const searchIndex = cities.findIndex( (item, index) => ( item === 'Samsun' ) )
  console.log(searchIndex);
  
  // filter
  cities = cities.filter( (item, index) => (typeof item) === 'string' )


  return (
    <>
        <h2>User Login</h2>
        <p>User Detail</p>
        { cities.map( ( item, index ) => 
            <div key={index}><li> { item.toString() } </li></div>
        )}
    </>
  )

}

export default Login