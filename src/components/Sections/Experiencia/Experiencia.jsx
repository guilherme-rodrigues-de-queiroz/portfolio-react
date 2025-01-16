import '../Experiencia/Experiencia.css'
import { Exp } from '../../../data/constants'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component";
import { experiences } from '../../../data/constants'
import ExperienceCard from '../../Cards/ExperienceCard/ExperienceCard.jsx'

function Experiencia() {

  return (
    <div id="Experiencia">
      <div className="WrapperExp">
        <div className="TitleExp">{Exp.titulo}</div>
        <div className="DescExp">{Exp.descricao}</div>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`}
              experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Experiencia
