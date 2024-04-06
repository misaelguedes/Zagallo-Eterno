import './header.css'
import Capa from '../../assets/capa.png'

export default function Header() {
    return (
        <header>
            <img className='capa' src={Capa} alt='Foto de Capa'/>
        </header>
    )
}