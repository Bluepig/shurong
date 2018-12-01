import React from 'react'
import monitor_dots from '../../assets/icons/monitor-dots.svg'

const indexs = [
  { title: '租售比', updown: '-', value: '75%' },
  { title: '坪效', updown: '-', value: '999' },
  { title: '销售额', updown: '+57%', value: '33,400,000' },
  { title: '入店客流', updown: '-57%', value: '99.999' },
  { title: '会员消费占比', updown: '-', value: '75%' },
  { title: '会员复购率', updown: '-', value: '75%' },
  { title: '平均租金', updown: '-', value: '86' }
]

const listItems = indexs.map(index => (
  <li>
    <span>{index.title}</span>
    <span>{index.updown}</span>
    <span>{index.value}</span>
  </li>
))

class Minitor_IndexList extends React.Component {
  render() {
    return (
      <div class="indexlist">
        <span class="indexlabel">指标列表</span>
        <img src={monitor_dots} alt="monitor_dots" />
        <div class="sublabel">
          <span>同比</span>
          <span>环比</span>
        </div>
        <ul class="indexs">{listItems}</ul>
      </div>
    )
  }
}

export default Minitor_IndexList
