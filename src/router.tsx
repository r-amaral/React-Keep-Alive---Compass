import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/Login';
import Home from './pages/Home'
export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />} />
        </Routes>
    )
}