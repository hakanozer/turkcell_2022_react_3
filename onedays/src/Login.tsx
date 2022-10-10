import React from 'react'
import { IUser } from './models/IUser'
import appTitle, { userPasswordValid } from './util'

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

  // fnc call
  const newPassword = userPasswordValid(100, "1212", "abc")
  if ( newPassword ) {
    console.log( newPassword.length )
  }
  const passx = userPasswordValid(56, "1212")
  console.log( passx );

  // Object
  const user = {
    name: 'Ali',
    surname: 'Bilmem',
    age: 30,
    status: false
  }

  const userx: IUser = {
    name: 'Erkan',
    surname: 'Bilsin',
    age: 20,
    status: true
  }
 
  return (
    <>
        <h1> { appTitle } </h1>
        <h2>User Login</h2>
        <p>User Detail</p>
        <div> { user.name } </div>
        <div> { userx.name } </div>
        { cities.map( ( item, index ) => 
            <div key={index}><li> { item.toString() } </li></div>
        )}
    </>
  )

}

export default Login