import '../Formacao/Formacao.css'
import { For } from '../../../data/constants'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component";
import { education } from '../../../data/constants'
import EducationCard from '../../Cards/EducationCard/EducationCard.jsx'

function Formacao() {

  return (
    <div id="Formacao">
      <div className="WrapperFor">
        <div className="TitleFor">{For.titulo}</div>
        <div className="DescForm">{For.descricao}</div>

        <VerticalTimeline>
          {education.map((item, index) => (
            <EducationCard key={`education-${index}`}
              education={item} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Formacao