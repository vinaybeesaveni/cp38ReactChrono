import {Chrono} from 'react-chrono'
import CourseTimeLineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLine = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} item={item} />
    }
    return <CourseTimeLineCard key={item.id} item={item} />
  }

  return (
    <div className="chrono-container">
      <h1 className="journey-heading">
        MY JOURNEY OF <br />
        <span className="ccbp-heading">CCBP 4.0</span>
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        items={timelineItemsList}
        theme={{
          secondary: 'white',
        }}
      >
        {timelineItemsList.map(each => renderTimeLine(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
