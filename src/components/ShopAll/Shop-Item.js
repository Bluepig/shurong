import React from 'react'
class ShopItem extends React.Component {
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

export default ShopItem;

