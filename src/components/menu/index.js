import './menu.css'

import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <menu>
            <div className="itens">
                <Link to='/'>Home</Link>
                <Link to='/historia'>História</Link>
                <Link to='/titulos'>Títulos</Link>
            </div>
        </menu>
    )
}