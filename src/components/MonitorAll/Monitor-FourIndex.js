import React from 'react'
import monitor_rentrate from '../../assets/icons/monitor-rentrate.svg'
import monitor_efficient from '../../assets/icons/monitor-efficient.svg'
import monitor_stream from '../../assets/icons/monitor-stream.svg'
import monitor_abnormalshop from '../../assets/icons/monitor-abnormalshop.svg'

class Minitor_FourIndex extends React.Component {
  render() {
    return (
      <div class="grid-container">
        <div class="grid-block-rentrate">
          <div class="label">
            95% &#8595;
            <div class="smalllabel">出租率</div>
          </div>
          <img src={monitor_rentrate} alt="monitor_rentrate" />
        </div>

        <div class="grid-block-efficient">
          <div class="label">
            494 &#8595;
            <div class="smalllabel">坪效</div>
          </div>
          <img src={monitor_efficient} alt="monitor_efficient" />
        </div>

        <div class="grid-block-stream">
          <div class="label">
            8,900 &#8593;
            <div class="smalllabel">客流变化</div>
          </div>
          <img src={monitor_stream} alt="monitor_stream" />
        </div>

        <div class="grid-block-abnomalshop">
          <div class="label">
            肯德基
            <div class="smalllabel">异常店铺</div>
          </div>
          <img src={monitor_abnormalshop} alt="monitor_abnormalshop" />
        </div>
      </div>
    )
  }
}

export default Minitor_FourIndex
