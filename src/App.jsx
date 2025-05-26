import React from 'react'
import sample2 from './sample2.pdf'
import cc_record from './cc_record.pdf'
import mann from './mainn.pdf'

const App = () => {
  return (
    <div className="min-h-screen bg-red-800">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-8">
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg bg-white p-2"
          src={sample2}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg"
          src={cc_record}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg"
          src={mann}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
      </div>
      <h1>refer both</h1>
    </div>
  )
}

export default App