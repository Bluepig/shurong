import React from 'react'
import { Map } from 'react-amap'
import detail_dots from '../../assets/icons/monitor-dots.svg'

const position = { longitude: 121.4737, latitude: 31.2304 }

class Detail_Map3D extends React.Component {
  render() {
    return (
      <div class="map_list">
        <span class="maplabel">3D项目地图（之后替换成D3）</span>
        <img src={detail_dots} alt="monitor_dots" />
        <div class="location">
          <div id="amap">
            <Map center={position} zoom={14} />
          </div>
          <div class="list">this is list</div>
        </div>
      </div>
    )
  }
}

export default Detail_Map3D
