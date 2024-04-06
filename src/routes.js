import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/header'
import Menu from './components/menu'
import Home from './pages/home'
import Footer from './components/footer'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}