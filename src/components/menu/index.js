import './menu.css'

import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

export default function Menu() {

    const [itensVisible, setItensVisible] = useState(false)

    useEffect(() => {
        function mudouTamanho() {
            setItensVisible(window.innerWidth >= 768)
        }

        window.addEventListener('resize', mudouTamanho);

        mudouTamanho();

        return () => {
            window.removeEventListener('resize', mudouTamanho);
          };
    }, [])

    function clickMenu() {
        setItensVisible(!itensVisible)
    }

    function hideMenu() {
        if (window.innerWidth <= 768) {
            setItensVisible(false)
        }
    }

    return (
        <menu>
            <div className="itens" style={{ display: itensVisible ? 'block' : 'none' }}>
                <Link onClick={hideMenu} to='/'>Home</Link>
                <Link onClick={hideMenu} to='/historia'>História</Link>
                <Link onClick={hideMenu} to='/titulos'>Títulos</Link>
            </div>
            <div className='burguer' onClick={clickMenu}>
                <span>&equiv;</span>
            </div>
        </menu>
    )
}