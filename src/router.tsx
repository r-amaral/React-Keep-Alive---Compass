import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import Registration from './pages/Registration';
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}