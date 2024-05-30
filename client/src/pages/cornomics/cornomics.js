import React from 'react'
import './cornomics.css'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

import {Pie} from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function Cornnomics() {
  const data = {
    labels: ['Presale', 'LP', 'Community Airdrops', 'Operations', 'Team- A Big Fat, Zero!'],
    datasets:[
      {
        data: [48, 35, 12, 5, 0],
        backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple']
      }
    ]
  }
  const options = {

  }
  return (
    <div>
      <div className="cornomics">
        <div className='cornomics-container'>
          <Pie data={data} options={options}>
          </Pie>
        </div>
      </div>
    </div>
  )
}

export default Cornnomics
