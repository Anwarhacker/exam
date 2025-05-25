import React from 'react'
import sample2 from './sample2.pdf'

const App = () => {
  return (
    <div>

<div className="h-screen flex flex-col items-center justify-center">
  <embed 
    src={sample2}
    type="application/pdf"
    width="800px"
    height="600px"
  />
</div>
    </div>
  )
}

export default App