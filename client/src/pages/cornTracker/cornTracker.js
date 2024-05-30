import React from 'react'
import './cornTracker.css'

function CornTracker() {
  return (
    <div className="tracker-div">
      <div className="tracker-container">
        <div className="tracker-heading">
          <h1 className='tracker-heading-text'>Corn Tracker</h1>
        </div>
        <div className="tracker-frame">
          <iframe src="https://dexscreener.com/cronos/0xc7a139c804a3bbdfe90d32c100dffeca1a2f735c?embed=1&theme=dark" width="100%" frameBorder="0" height="100%" title="dexscreener"/>
        </div>
      </div>
    </div>
  )
}

export default CornTracker
