import '../Projetos/Projetos.css'
import { projects } from '../../../data/constants'
import ProjectCard from '../../Cards/ProjectCard/ProjectCard'
import { useState } from 'react'
import { Proj } from '../../../data/constants'

function Projetos() {
    const [toggle, setToggle] = useState("all");

    const filteredProjects = toggle === "all"
        ? projects
        : projects.filter((item) => item.category === toggle);

    return (
        <div id="Projetos">
            <div className="WrapperProjeto">
                <div className="TitleProjeto">{Proj.titulo}</div>
                <div className="DescProjeto">{Proj.descricao}</div>

                <div className="ToggleButtonGroup">
                    <div
                        className={`ToggleButton ${toggle === "all" ? "active" : ""}`}
                        onClick={() => setToggle("all")}
                    >
                        ALL
                    </div>
                    <div className="DividerProj"></div>
                    <div
                        className={`ToggleButton ${toggle === "website" ? "active" : ""}`}
                        onClick={() => setToggle("website")}
                    >
                        WEBSITE'S
                    </div>
                    <div className="DividerProj"></div>
                    <div
                        className={`ToggleButton ${toggle === "app" ? "active" : ""}`}
                        onClick={() => setToggle("app")}
                    >
                        APP'S
                    </div>
                </div>

                <div className="CardContainerProj">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projetos;