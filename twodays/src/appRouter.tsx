import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import NavBar from './inc/NavBar'
import Login from './Login'
import Settings from './Settings'

export const routes = 
<BrowserRouter>
    <NavBar></NavBar>
    <Routes>
        <Route path='' element={<Login />} ></Route>
        <Route path='/dashboard' element={<Dashboard />} ></Route>
        <Route path='/settings' element={<Settings />}></Route>
    </Routes>
</BrowserRouter>