import React from 'react'
import foodIconGray from '../../assets/icons/food-icon-gray.svg';
// import entertainmentIconGray from '../../assets/icons/entertainment-icon-gray.svg';
// import serviceIconGray from '../../assets/icons/service-icon-gray.svg';
// import marketIcon from '../../assets/icons/market-icon.svg';
// import clothesIcon from '../../assets/icons/clothes-icon.svg';
// import allFormatsIcon from '../../assets/icons/all-formats-icon.svg';

const mockdata = [
    {
        biztype: '餐饮',
        shoplist: [
            {shopName: '肯德基', floor: 'L1-2'},
            {shopName: '来伊份', floor: 'L1-2'},
            {shopName: '山崎面包', floor: 'L1-2'},
            {shopName: '星巴克咖啡', floor: 'L1-2'},
        ]
    },
    {
        biztype: '娱乐休闲',
        shoplist: [
            {shopName: '台北纯K', floor: 'L1-2'},
            {shopName: '游戏天地', floor: 'L1-2'},
        ]
    },
    {
        biztype: '超市',
        shoplist: [
            {shopName: '沃尔玛', floor: 'L1-2'},
            {shopName: '上蔬永辉', floor: 'L1-2'},
        ]
    },
    {
        biztype: '配套服务',
        shoplist: [
            {shopName: '洗车', floor: 'L1-2'},
            {shopName: '理发', floor: 'L1-2'},
        ]
    },
]

class ProjectDetailShopList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: mockdata,
        }
    }
    render() {
        return(
            <div className="topBlock-right">
                <ul className="shop-list">
                    <li className="item-container">
                        <ul>
                            <li>
                                <img src={foodIconGray}/>
                                <span>餐饮</span>
                            </li>
                            <li>肯德基</li>
                            <li>来伊份</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ProjectDetailShopList;