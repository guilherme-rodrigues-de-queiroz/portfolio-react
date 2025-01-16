import '../Habilidades/Habilidades.css'
import { Tilt } from 'react-tilt'
import { Hab } from '../../../data/constants'
import { skills } from '../../../data/constants'

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

function Habilidades() {
    return (
        <div id="Habilidades">
            <div className="Wrapper">
                <div className="TitleHab">{Hab?.titulo || "Título não disponível"}</div>
                <div className="Descricao">{Hab?.descricao || "Descrição não disponível"}</div>

                <div className="HabilidadesContainer">
                    {skills?.length > 0 ? (
                        skills.map((skill, index) => (
                            <Tilt key={`skill-${index}`} options={defaultTilt}>
                                <div className="Skill">
                                    <div className="SkillTitle">{skill.title}</div>
                                    <div className="SkillList">
                                        {skill.skills?.map((item, index_x) => (
                                            <div
                                                className="SkillItem"
                                                key={`skill-x-${index_x}`}
                                            >
                                                <img
                                                    className="SkillImage"
                                                    src={item.image}
                                                    alt={item.name || "Imagem da habilidade"}
                                                />
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Tilt>
                        ))
                    ) : (
                        <div className="NoSkills">Nenhuma habilidade disponível.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Habilidades
