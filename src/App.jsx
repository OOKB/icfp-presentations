import React from 'react'
import items from './data.json'

import Presentation from './Presentation'

function App() {
  return (
    <div id="type-presentation-index">
      { items.map((item) => <Presentation key={item.internalId} {...item} />) }
    </div>
  )
}

export default App
