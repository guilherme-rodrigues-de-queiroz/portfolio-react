import '../ProjectCard/ProjectCard.css'

function ProjectCard({ project }) {
    if (!project) return null;

    return (
        <div className="CardProj">
            <img src={project.image} alt={`Imagem do projeto ${project.title}`} />
            <div className="DetailsProj">
                <div className="TitlePro">{project.title}</div>
                <div className="DatePro">{project.date}</div>
                <div className="DescriptionPro">{project.description}</div>
            </div>
            <div className="MembersProj">
                {project.member?.map((member, index) => (
                    <img
                        key={index}
                        src={member.img}
                        alt={`Imagem do membro ${member.name}`}
                        title={member.name}
                        loading="lazy"
                    />
                ))}
            </div>
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="GithubLink"
                >
                    Ver Projeto
                </a>
            )}
        </div>
    )
}

export default ProjectCard;