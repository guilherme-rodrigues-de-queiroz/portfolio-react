import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import '../ExperienceCard/ExperienceCard.css'

function ExperienceCard({ experience }) {

    return (
        <VerticalTimelineElement
            icon={<img
                width="100%"
                height="100%"
                alt={experience?.company}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={experience?.img}
            />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "#1d1836",
                color: "#fff",
                boxShadow: "4px 4px 5px #00000040, -4px -4px 5px rgba(255, 255, 255, 60%)",
                backgroundColor: "#E6E7EE",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
            }}

            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
            }}
            date={experience.date}
        >
            <div className="Top">
                <img src={experience.img} loading="lazy" alt="Experiência" />
                <div className="BodyExp">
                    <div className="RoleExp">{experience.role}</div>
                    <div className="CompanyExp">{experience.company}</div>
                    <div className="DateExp">{experience.date}</div>
                </div>
            </div>
            <div className="DescriptionExp">
                {experience?.desc && <span>{experience.desc}</span>}
                {experience?.skills && (
                    <>
                        <br />
                        <div className="SkillsExp">
                            <b>Skills:</b>
                            <div className="ItemWrapperExp">
                                {experience?.skills?.map((skill, index) => (
                                    <div className="SkillExp" key={index}>
                                        {skill}
                                        {index < experience.skills.length - 1 && ','}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </VerticalTimelineElement>
    )
}

export default ExperienceCard