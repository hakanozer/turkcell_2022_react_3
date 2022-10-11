import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import Login from './Login'

export const router =
<BrowserRouter>
    <Routes>
        <Route path='' element={ <Login /> }></Route>
    </Routes>
</BrowserRouter>