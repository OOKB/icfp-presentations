import { compact } from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'

function getClassName(isPresenter) {
  // if (tagName) return tagName
  // If no tagName defined we base it off the presenter value.
  return isPresenter ? 'presenter' : 'author'
}
function getAuthorName({
  events, firstname, lastname, nameSuffix, namePrefix,
}) {
  // THE AUTHOR INDEX PAGES.
  if (events) {
    const last = nameSuffix ? `${lastname} ${nameSuffix}, ` : `${lastname}, `
    const first = namePrefix ? `${namePrefix} ${firstname}; ` : `${firstname}; `
    return last + first
  }
  // EVERYWHERE ELSE.
  return compact([namePrefix, firstname, lastname, nameSuffix]).join(' ')
}

function Author({
  company, id, isPresenter, isChair, ...other
}) {
  const fullName = getAuthorName({
    isPresenter, isChair, ...other,
  })
  return (
    <div className={getClassName(isPresenter, isChair)} title={id}>
      <p className="person">
        <span className="fullname">{fullName}</span>
        { company && <span className="company">, { company }</span> }
      </p>
    </div>
  )
}
Author.defaultProps = {
  company: null,
  namePrefix: '',
  nameSuffix: '',
  isPresenter: false,
  isChair: false,
}
Author.propTypes = {
  company: PropTypes.string,
  id: PropTypes.string.isRequired,
  isChair: PropTypes.bool,
  isPresenter: PropTypes.bool,
  namePrefix: PropTypes.string,
  nameSuffix: PropTypes.string,
}
export default Author
