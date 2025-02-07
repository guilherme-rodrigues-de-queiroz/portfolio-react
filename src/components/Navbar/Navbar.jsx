import '../Navbar/Navbar.css'
import { useState } from 'react'
import { Bio } from '../../data/constants.js'
import { Toggle } from '../Toggle/Toggle.jsx'

function Navbar({ toggleTheme, isDark }) {
    const [menuVisible, setMenuVisible] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setMenuVisible(false);
        setIsActive(false);
    };

    return (
        <nav>
            <div className="NavbarContainer">
                <a href="/" className="NavLogo"><div>Portfólio</div></a>

                <ul className={`NavItems ${isActive ? 'active' : ''}`}>
                    <li className="NavLink"><a href="#Sobre" onClick={closeMenu}>Sobre</a></li>
                    <li className="NavLink"><a href="#Habilidades" onClick={closeMenu}>Habilidades</a></li>
                    <li className="NavLink"><a href="#Experiencia" onClick={closeMenu}>Experiência</a></li>
                    <li className="NavLink"><a href="#Projetos" onClick={closeMenu}>Projetos</a></li>
                    <li className="NavLink"><a href="#Formacao" onClick={closeMenu}>Formação</a></li>
                    <li className="NavLink"><a href="#Contato" onClick={closeMenu}>Contato</a></li>
                    <li className="NavLinkButton"><a href={Bio.github} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><button>Github Profile</button></a></li>
                </ul>
                
                <ul className="NavButton">
                    <li className="ButtonLink" title='Menu' onClick={toggleMenu}><i className="fa-solid fa-bars"></i></li>
                </ul>

                <ul className="btnToggleDark">
                    <li>
                        <Toggle isChecked={isDark} handleChange={toggleTheme} />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar