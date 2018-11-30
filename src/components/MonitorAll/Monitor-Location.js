import React from 'react'
import { Map } from 'react-amap'
import monitor_dots from '../../assets/icons/monitor-dots.svg'

const position = { longitude: 121.4737, latitude: 31.2304 }

class Minitor_Location extends React.Component {
  render() {
    return (
      <div class="location">
        <span class="maplabel">项目地理位置</span>
        <img src={monitor_dots} alt="monitor_dots" />
        <div id="amap">
          <Map center={position} zoom={14} />
        </div>
      </div>
    )
  }
}

export default Minitor_Location
