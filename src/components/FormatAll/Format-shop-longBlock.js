import React from 'react'
import '../../styles/format/formatShopLongBlock.scss'
class FormatShopLongBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="longblock">
                <span className="shop-name">肯德基</span>
                <span className="shop-location">L1-875</span>
            </div>
        )
    }
}

export default FormatShopLongBlock;

