import React from 'react'
import items from './data.json'

import Toc from './Toc'
import Presentation from './Presentation'

function App() {
  return (
    <div className="wrapper">
      <div id="table-of-contents">
        <h1>Table of Contents</h1>
        { items.map((item) => <Toc key={item.internalId} {...item} />) }
      </div>
      <div id="type-presentation-index">
        { items.map((item) => <Presentation key={item.internalId} {...item} />) }
      </div>
    </div>
  )
}

export default App
