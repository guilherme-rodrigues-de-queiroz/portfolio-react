import '../Footer/Footer.css'
import { Bio } from '../../../data/constants.js'

function Footer() {

    return (
        <div className="FooterContainer">
            <div className="FooterWrapper">
                <nav>
                    <a href="#Sobre" className="NavLink">Sobre</a>
                    <a href="#Habilidades" className="NavLink">Habilidades</a>
                    <a href="#Experiencia" className="NavLink">Experiência</a>
                    <a href="#Projetos" className="NavLink">Projetos</a>
                    <a href="#Formacao" className="NavLink">Formação</a>
                    <a href="#Contato" className="NavLink">Contato</a>
                </nav>
                <div className="SocialMedia">
                    <a href={Bio.github} target="_blank" rel="noopener noreferrer" className="SocialMediaIcon" aria-label="github"><i className="fa-brands fa-github"></i></a>
                    <a href={Bio.youtube} target="_blank" rel="noopener noreferrer" className="SocialMediaIcon" aria-label="youtube"><i className="fa-brands fa-youtube"></i></a>
                    <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="SocialMediaIcon" aria-label="linkedin"><i className="fa-brands fa-linkedin"></i></a>
                </div>
                <div className="Nick">© 2024 - Guilherme Rodrigues</div>
            </div>
        </div>
    )
}

export default Footer;