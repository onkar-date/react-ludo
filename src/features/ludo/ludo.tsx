import React from 'react'
import './ludo.scss';
const Ludo = () => {
  return (
    <div className="container p-4">
      <div className='wrapper'>

        {/* Top Section */}
        <div className="topSection section">
          <div className='playerHome topGreen'></div>
          <div className='pathColumnSection topMiddle'>
            <div className='pathColumn leftColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className='pathColumn middleColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className='pathColumn rightColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
          </div>
          <div className='playerHome topYellow'></div>
        </div>

        {/* Middle Section */}
        <div className="middleSection section">
          <div className="pathRowSection middleLeft">
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
          </div>
          <div className="winningArea"></div>
          <div className="pathRowSection middleRight">
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className="pathRow">
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottomSection section">
          <div className='playerHome bottomRed'></div>
          <div className='pathColumnSection bottomMiddle'>
            <div className='pathColumn leftColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className='pathColumn middleColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
            <div className='pathColumn rightColumn'>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
              <div className="cell"></div>
            </div>
          </div>
          <div className='playerHome bottomBlue'></div>
        </div>
      </div>
    </div>
  )
}

export default Ludo