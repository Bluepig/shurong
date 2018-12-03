import React from 'react'
import ShopItem from '../ShopAll/Shop-Item'
import ShopFourIndex from '../ShopAll/Shop-FourIndex'
import ShopChart from '../ShopAll/Shop-Chart'
import '../../styles/shopPage.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className='shopPage'>
                <ShopItem />
                <ShopFourIndex />
                <ShopChart />
            </div>
        )
    }
}

export default ShopPage;