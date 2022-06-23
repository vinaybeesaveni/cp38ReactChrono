import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {item} = props
  const {projectTitle, imageUrl, projectUrl, duration, description} = item
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="calender-container">
          <AiFillCalendar className="calender-icon" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimeLineCard
