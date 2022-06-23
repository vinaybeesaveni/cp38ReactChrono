import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item
  return (
    <div className="course-container">
      <div className="title-container">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="days-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li key={each.id} className="list-item">
            <p className="name">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeLineCard
