import '../Sobre/Sobre.css'
import Typewriter from 'typewriter-effect'
import Eu from '../../../images/Eu.png'
import { Bio } from '../../../data/constants'
import { Tilt } from 'react-tilt'
import CV from '../../../assets/curriculo.pdf'

const defaultTilt = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}

function Sobre() {

  return (
    <div id="Sobre">
      <div className="SobreContainer">
        <div className="SobreInnerContainer">
          <div className="SobreLeftContainer">
            <div className="Title">
              {Bio.nome}
            </div>

            <div className="TextLoop">
              Sou
              <span>
                <Typewriter
                  options={{
                    strings: Bio.textos,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>

            <div className="SubTitle">{Bio.descricao}</div>
            <a href={CV} target="_blank" rel="noopener noreferrer" className='ResumeButton'>
              <button><span><i className="fa-solid fa-download"></i></span>Currículo</button>
            </a>
          </div>

          <div className="SobreRightContainer">
            <Tilt options={defaultTilt}>
              <div className="RoundedImg">
                <img src={Eu} alt='Guilherme Rodrigues'></img>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre
