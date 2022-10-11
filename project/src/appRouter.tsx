import { BrowserRouter, Routes ,Route } from 'react-router-dom'

// import components
import Dashboard from './Dashboard'
import Login from './Login'

export const router =
<BrowserRouter>
    <Routes>
        <Route path='' element={ <Login /> }></Route>
        <Route path='/dashboard' element={ <Dashboard /> }></Route>
    </Routes>
</BrowserRouter>