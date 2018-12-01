import React from 'react'
import ReactEcharts from 'echarts-for-react'
import monitor_dots from '../../assets/icons/monitor-dots.svg'

var xAxisData = []
var data1 = []
var data2 = []
for (var i = 0; i < 100; i++) {
  xAxisData.push('类目' + i)
  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
}

const option = {
  title: {
    text: '柱状图动画延迟'
  },
  legend: {
    data: ['bar', 'bar2'],
    align: 'left'
  },
  toolbox: {
    // y: 'bottom',
    feature: {
      magicType: {
        type: ['stack', 'tiled']
      },
      dataView: {},
      saveAsImage: {
        pixelRatio: 2
      }
    }
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    silent: false,
    splitLine: {
      show: false
    }
  },
  yAxis: {},
  series: [
    {
      name: 'bar',
      type: 'bar',
      data: data1,
      animationDelay: function(idx) {
        return idx * 10
      }
    },
    {
      name: 'bar2',
      type: 'bar',
      data: data2,
      animationDelay: function(idx) {
        return idx * 10 + 100
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function(idx) {
    return idx * 5
  }
}

class Minitor_History extends React.Component {
  render() {
    return (
      <div class="history">
        <span class="historylabel">主要指标历史数据</span>
        <img src={monitor_dots} alt="monitor_dots" />
        <ReactEcharts option={option} />
      </div>
    )
  }
}

export default Minitor_History
