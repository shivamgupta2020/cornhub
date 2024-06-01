import React from 'react'
import './cornomics.css'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import Footer from '../../components/footer/footer'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.color = '#f90';


function Cornnomics() {
  const data = {
    labels: ['Presale', 'LP', 'Community Airdrops', 'Operations', 'Team- A Big Fat, Zero!'],
    datasets: [
      {
        data: [48, 35, 12, 5, 0],
        backgroundColor: ['orange', 'white', 'green', 'yellow', 'purple']
      }
    ]
  }
  const options = {
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: 'black'
      }
    },
    plugins: {
      legend: {
        display: false
      }
    },
    // plugins: {
    //   legend: {
    //     labels: {
    //       // This more specific font property overrides the global property
    //       font: {
    //         size: 14,
    //         family: 'Skribble'

    //       }
    //     }
    //   }
    // }
  }
  return (
    <div>
      <div className="cornomics">
        <h1 style={{textAlign:"center", color:"#f90"}}>Cornomics</h1>
        <div className='cornomics-container'>
            <div className="piechart"><Pie data={data} options={options}></Pie></div>
            <div className="labels">
              <ul>
                <li style={{color:"orange"}}>Presale: 48%</li>
                <li style={{color:"white"}}>LP: 35%</li>
                <li style={{color:"green"}}>Community Airdrops: 12%</li>
                <li style={{color:"yellow"}}>Operations/ Community Giveaways/ Burns: 5%</li>
                <li style={{color:"purple"}}>Team- A Big Fat, Zero!</li>
              </ul>
          </div>
        </div>
      </div>
      <Footer position="relative"/>
    </div>
  )
}

export default Cornnomics
