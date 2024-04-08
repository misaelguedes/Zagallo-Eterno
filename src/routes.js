import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/header'
import Menu from './components/menu'
import Home from './pages/home'
import Footer from './components/footer'
import Historia from './pages/historia'
import Titulos from './pages/titulos'
import Erro from './pages/erro'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/historia' element={<Historia/>}/>
                <Route path='/titulos' element={<Titulos/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}