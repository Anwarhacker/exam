import React from 'react'
import sample from './sample.pdf'

const App = () => {
  return (
    <div>

<div className="h-screen flex flex-col items-center justify-center">
  <embed 
    src={sample}
    type="application/pdf"
    width="800px"
    height="600px"
  />
</div>
    </div>
  )
}

export default App