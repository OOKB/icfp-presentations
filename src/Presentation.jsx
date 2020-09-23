import { map } from 'lodash/fp'
import React from 'react'
import Author from './Author'
import Section from './Section'

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
  { id: 'methodology', label: 'Methodology' },
  { id: 'resultsKeyFindings', label: 'Results/key findings' },
  { id: 'knowledgeContribution', label: 'Knowledge contribution' },
]

function Presentation({
  authors, description, sessionDate, trackName,
}) {
  const { title } = description
  return (
    <div className="presentation">
      <article>
        <h1>{title}</h1>
        <aside>
          <div className="authors">
            <h3>Authors</h3>
            { map((item) => <Author key={item.id} {...item} />, authors) }
          </div>
          <div className="track">
            {trackName}
          </div>
          <div className="session-date">
            {sessionDate}
          </div>
          <div className="sessionID">
            sessionID? Abstract ID?
          </div>
        </aside>
        <abstract>
        { map(
          ({ id, label }) => <Section key={id} title={label} content={description[id]} />,
          sections,
        )}
        </abstract>
      </article>
    </div>
  )
}

export default Presentation
