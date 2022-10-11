import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'
import Registration from './pages/Registration';
import RegistrationProvider from './common/context/RegistrationData';
import AuthContextProvider, { AuthContext } from './common/context/AuthContext';
import { useContext } from 'react';
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={
                <RegistrationProvider>
                    <Login />
                </RegistrationProvider>}
            />
            <Route path='/registration' element={
                <RegistrationProvider>
                    <Registration />
                </RegistrationProvider>}
            />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}

