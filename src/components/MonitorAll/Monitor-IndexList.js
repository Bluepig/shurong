import React from 'react'
import monitor_dots from '../../assets/icons/monitor-dots.svg'

class Minitor_IndexList extends React.Component {
  render() {
    return (
      <div class="indexlist">
        <span class="indexlabel">指标列表</span>
        <img src={monitor_dots} alt="monitor_dots" />
      </div>
    )
  }
}

export default Minitor_IndexList
