import { map } from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import Author from './Author'
import Section from './Section'

function Track({ children }) {
  return (
    <div className="track">
      <h3>Track</h3>
      <p>
        {children}
      </p>
    </div>
  )
}
Track.propTypes = {
  children: PropTypes.string.isRequired,
}

// 8239 trackFirstChoice
// 8244 significanceBackground
// 8245 mainQuestionHypothesis
// 8247 methodology
// 8249 resultsKeyFindings
// 8250 knowledgeContribution

const sections = [
  // { id: 'trackFirstChoice', label: 'Track' },
  { id: 'mainQuestionHypothesis', label: 'Main question/hypothesis' },
  { id: 'significanceBackground', label: 'Significance/background' },
  { id: 'programInterventionActivityTested', label: 'Program Intervention/activity tested'},
  { id: 'methodology', label: 'Methodology' },
  { id: 'resultsKeyFindings', label: 'Results/key findings' },
  { id: 'knowledgeContribution', label: 'Knowledge contribution' },
  { id: 'programImplicationsLessonsLearned', label: 'Program implications/lessons learned'}
]

function Presentation({
  authors, description, id, sessionDate, sessionCode, sessionName, trackName, title,
}) {
  // const { title } = description
  const contentSections = sections.filter(({ id }) => !!description[id])
  return (
    <div className="presentation">
      <article>
        <h1>
          {id}
          {': '}
          {title}
        </h1>
        <aside>
          <div className="authors">
            <h3>Authors</h3>
            { map((item) => <Author key={item.id} {...item} />, authors) }
          </div>
          <div className="session">
            <h3>Session</h3>
            <p>
              Part of
              {' '}
              {sessionCode}
              {' '}
              <i>{sessionName}</i>
              {' '}
              on
              {' '}
              {sessionDate}
            </p>
          </div>
          {trackName && <Track>{trackName}</Track>}
        </aside>
        <abstract>
          { map(
            ({ id, label }) => <Section key={id} title={label} content={description[id]} />,
            contentSections,
          )}
        </abstract>
      </article>
    </div>
  )
}

export default Presentation
