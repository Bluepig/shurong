import React from 'react'
import shop_arrow_down from '../../assets/icons/shop-arrow-down.svg'
import shop_arrow_up from '../../assets/icons/shop-arrow-up.svg'
import shop_stream from '../../assets/icons/shop-stream.svg'
import shop_abnormalshop from '../../assets/icons/shop-abnormalshop.svg'
import shop_efficient from '../../assets/icons/shop-efficient.svg'
import shop_rentrate from '../../assets/icons/shop-rentrate.svg'

class ShopFourIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="four-blocks">
                <div className="smallblock">
                    <div className="label">
                        23000
                        <span>
                            <img src={shop_arrow_down} alt='shop_arrow_down'></img>
                            2%
                        </span>
                        <div className="smalllabel">出租率</div>
                    </div>
                    <img src={shop_rentrate} alt='shop_rentrate'/>
                </div>
                <div className="smallblock">
                    <div className="label">
                        23000
                        <span>
                            <img src={shop_arrow_down} alt='shop_arrow_down'></img>
                            2%
                        </span>
                        <div className="smalllabel">坪效</div>
                    </div>
                    <img src={shop_efficient} alt='shop_efficient' />
                </div>
                <div className="smallblock">
                    <div className="label">
                        23000
                        <span>
                            <img src={shop_arrow_down} alt='shop_arrow_down'></img>
                            2%
                        </span>
                        <div className="smalllabel">客流变化</div>
                    </div>
                    <img src={shop_stream} alt='shop_stream' />
                </div>
                <div className="smallblock">
                    <div className="label">
                        肯德基
                        <span>
                            <img src={shop_arrow_down} alt='shop_arrow_down'></img>
                            2%
                        </span>
                        <div className="smalllabel">异常店铺</div>
                    </div>
                    <img src={shop_abnormalshop} alt='shop_abnormalshop' />
                </div>
            </div>
        )
    }
}

export default ShopFourIndex;