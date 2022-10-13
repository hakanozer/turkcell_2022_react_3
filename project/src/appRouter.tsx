import { BrowserRouter, Routes ,Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { userLoginControl } from './util'

// import components
import Dashboard from './Dashboard'
import Login from './Login'
import Orders from './Orders'
import ProductDetail from './ProductDetail'
import Security from './Security'
import Users from './Users'


export const router =
<BrowserRouter>
    <ToastContainer />
    <Routes>
        <Route path='' element={ userLoginControl() === null ? <Login /> : <Navigate to='/dashboard' /> }></Route>
        <Route path='/dashboard' element={ <Security component={<Dashboard />} /> }></Route>
        <Route path='/users' element={ <Security component={<Users />} /> } ></Route>
        <Route path='/detail/:pid' element={ <Security component={<ProductDetail />} /> } ></Route>
        <Route path='/orders' element={ <Security component={<Orders />} /> } ></Route>
    </Routes>
</BrowserRouter>