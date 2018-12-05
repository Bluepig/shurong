import React from 'react'
import ShopItem from '../ShopAll/Shop-Item'
import ShopFourIndex from '../ShopAll/Shop-FourIndex'
import ShopLineChart from '../ShopAll/Shop-LineChart'
import '../../styles/shopPage.scss'
import ShopDetailList from './Shop-detailList';

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
                <ShopLineChart />
                <ShopDetailList />
            </div>
        )
    }
}

export default ShopPage;