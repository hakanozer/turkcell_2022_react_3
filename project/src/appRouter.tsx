import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// import components
import Dashboard from './Dashboard'
import Login from './Login'
import Security from './Security'
import Users from './Users'

export const router =
<BrowserRouter>
    <Routes>
        <Route path='' element={ <Login /> }></Route>
        <Route path='/dashboard' element={ <Security component={<Dashboard />} /> }></Route>
        <Route path='/users' element={ <Security component={<Users />} /> } ></Route>
    </Routes>
</BrowserRouter>