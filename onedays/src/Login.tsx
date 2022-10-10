import React, { useState } from 'react'
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
    status: true,
    email: 'erkan@mail.com',
    address: {
      code: 2022,
      no: 4,
      title: "Beşiktaş"
    }
  }

  interface IAction {
    id: number,
    fncCall: Function
  }

  const fncSum = ( a: number, b: number ) : number => {
    return a + b
  }

  const itemAction: IAction = {
    id: 0,
    fncCall: fncSum
  }

  const sm = itemAction.fncCall(10, 20)
  console.log("Sum : ", sm );
  
  // Use State
  const [data, setData] = useState('')
  const sendData = ( ) => {
    console.log(data);
  }
 
  return (
    <>
        <h1> { appTitle } </h1>

        <input onChange={(evt) => setData(evt.target.value) } />
        <button onClick={ sendData } >Send</button>
        <h2> { data } </h2>
        {  data.split('').map( (item, index) => 
          <li key={index}> { item } </li>
        )}

        <h2>User Login</h2>
        <p>User Detail</p>
        <div> { user.name } </div>
        <div> { userx.name } </div>
        <div> { userx.address?.code } </div>
        { userx.email &&  
          <div> { userx.email.length } </div>
        }
        { cities.map( ( item, index ) => 
            <div key={index}><li> { item.toString() } </li></div>
        )}
    </>
  )

}

export default Login