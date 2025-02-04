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
            date={education.date}
        >
            <div className="TopFor">
                <img src={education.img} loading="lazy" alt="Formação" />
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