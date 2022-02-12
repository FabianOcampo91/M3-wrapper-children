import Imagen from './Imagen';
import MenuItems from './MenuItems';

import img from '../../assets/imagen/logo-fares.svg';

import './Header.css'


const Header = () => {
    const menu = ['Home', 'About Us', 'Contact Us']
    
    return ( 

        <div className="bg-header">
            <div className="header-container">
                <Imagen img={img} type='logo' alt='Fares'/>
                <MenuItems items={menu} direccion='horizontal'/>
            </div>
        </div>

     );
}
 
export default Header;