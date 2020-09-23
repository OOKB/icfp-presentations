import React from 'react'
import PropTypes from 'prop-types'

function Section({
  title, content,
}) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default Section
