import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom'

// import components
import Dashboard from './Dashboard'
import Login from './Login'
import ProductDetail from './ProductDetail'
import Security from './Security'
import Users from './Users'
import { userLoginControl } from './util'

export const router =
<BrowserRouter>
    <Routes>
        <Route path='' element={ userLoginControl() === null ? <Login /> : <Navigate to='/dashboard' /> }></Route>
        <Route path='/dashboard' element={ <Security component={<Dashboard />} /> }></Route>
        <Route path='/users' element={ <Security component={<Users />} /> } ></Route>
        <Route path='/detail/:pid' element={ <Security component={<ProductDetail />} /> } ></Route>
    </Routes>
</BrowserRouter>