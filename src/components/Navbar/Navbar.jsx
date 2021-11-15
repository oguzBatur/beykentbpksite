import logo from '../../imges/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className='navbar-grid'>
            <Link className='logo-img-link' to='/'>
                <img className='logo-img' alt='logo' src={logo}/>
            </Link>
            <h1 className='logo'>Beykent Üniversitesi <br/> Bilgisayar Programcılığı Kulübü</h1>
            <Link className='grid-about' to='/iletisim'>
                <button className='navbar-item'>İletişim</button>
            </Link>            
            <Link className='grid-events navbar-item' to='/etkinlikler'>
                <button className='navbar-item'>Etkinlikler</button>
            </Link>
        </div>
    )
}
export default Navbar;