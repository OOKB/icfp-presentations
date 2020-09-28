import { map } from 'lodash/fp'
import React from 'react'
import Author from './Author'

function Presentation({
  authors, title, id
}) {
  return (
    <div className="toc">
      <section>
        <h1>
          {id}
          {': '}
          {title}
        </h1>
        <div className="authors">
          { map((item) => <Author key={item.id} {...item} />, authors) }
        </div>
      </section>
    </div>
  )
}

export default Presentation
