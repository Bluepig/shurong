import React from 'react'
import MonitorFourIndex from './Monitor-FourIndex'
import MonitorLocation from './Monitor-Location'
import MonitorIndexList from './Monitor-IndexList'
import '../../styles/monitorPage.scss'

class MonitorPage extends React.Component {
  render() {
    return (
      <div className="monitorPage">
        <MonitorFourIndex />
        <div class="map_index">
          <MonitorLocation />
          <MonitorIndexList />
        </div>
      </div>
    )
  }
}

export default MonitorPage
