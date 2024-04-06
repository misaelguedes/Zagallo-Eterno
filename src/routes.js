import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/header'
import Menu from './components/menu'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/>
            <Menu/>
        </BrowserRouter>
    )
}