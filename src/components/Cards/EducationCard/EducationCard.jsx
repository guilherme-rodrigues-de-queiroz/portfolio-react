import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import '../EducationCard/EducationCard.css'

function EducationCard({ education }) {

    return (
        <VerticalTimelineElement
            icon={<img
                width="100%"
                height="100%"
                alt={education?.company}
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={education?.img}
            />
            }
            contentStyle={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                background: "var(--cor-de-fundo)",
                color: "#fff",
                boxShadow: "4px 4px 5px var(--sombra-preta), -4px -4px 5px var(--sombra-branca)",
                backgroundColor: "var(--cor-de-fundo)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                borderRadius: "6px",
                transition: "all 250ms ease-in-out",
            }}

            contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)",
            }}
            date={education.date}
        >
            <div className="TopFor">
                <img src={education.img} alt={education.school} loading="lazy" />
                <div className="BodyFor">
                    <div className="SchoolFor">{education.school}</div>
                    <div className="DegreeFor">{education.degree}</div>
                    <div className="DateFor">{education.date}</div>
                </div>
            </div>
            <div className="Grade">
                <b>Grade : </b>
                {education.grade}
            </div>
            <div className="DescFor">
                {education?.desc && <span>{education.desc}</span>}
            </div>
        </VerticalTimelineElement>
    )
}

export default EducationCard
