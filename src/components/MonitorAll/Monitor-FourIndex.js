import React from 'react'
import monitor_rentrate from '../../assets/icons/monitor-rentrate.svg'
import monitor_efficient from '../../assets/icons/monitor-efficient.svg'
import monitor_stream from '../../assets/icons/monitor-stream.svg'
import monitor_abnormalshop from '../../assets/icons/monitor-abnormalshop.svg'

class Minitor_FourIndex extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-block-rentrate">
          <div className="label">
            95% &#8595;
            <div className="smalllabel">出租率</div>
          </div>
          <img src={monitor_rentrate} alt="monitor_rentrate" />
        </div>

        <div className="grid-block-efficient">
          <div className="label">
            494 &#8595;
            <div className="smalllabel">坪效</div>
          </div>
          <img src={monitor_efficient} alt="monitor_efficient" />
        </div>

        <div className="grid-block-stream">
          <div className="label">
            8,900 &#8593;
            <div className="smalllabel">客流变化</div>
          </div>
          <img src={monitor_stream} alt="monitor_stream" />
        </div>

        <div className="grid-block-abnomalshop">
          <div className="label">
            肯德基
            <div className="smalllabel">异常店铺</div>
          </div>
          <img src={monitor_abnormalshop} alt="monitor_abnormalshop" />
        </div>
      </div>
    )
  }
}

export default Minitor_FourIndex
