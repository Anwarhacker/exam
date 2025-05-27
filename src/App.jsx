import React from 'react'
import devops from './devops.pdf'
import devops6 from './devops6.pdf'
import devops8 from './devops8.pdf'


const App = () => {
  return (
    <div className="min-h-screen bg-red-800">
      <div className="container mx-auto p-8 flex flex-col items-center justify-center gap-8">
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg bg-white p-2"
          src={devops}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg"
          src={devops6}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
        <embed 
          className="border-2 border-red-500 rounded-lg shadow-lg"
          src={devops8}
          type="application/pdf"
          width="1200px"
          height="850px"
        />
      </div>
      <h1>.....Minimize the screen with help of fingers...</h1>
    </div>
  )
}

export default App