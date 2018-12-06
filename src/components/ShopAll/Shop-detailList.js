import React from 'react';
import threeDots from '../../assets/icons/threeDots.svg'

class ShopDetailList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: true,
        }
    }
    render() {
        return(
            <div className="shoplist-threeblocks">
                <div className="block">
                    <span className="block-title">店铺基本信息</span>
                    <img src={threeDots} alt="threeDots"/>
                    <ul>
                        <li>
                            <span>公司名称</span>
                            <span>上海肯德基有限公司</span>
                        </li>
                        <li>
                            <span>开店时间</span>
                            <span>2017年6月30日</span>
                        </li>
                        <li>
                            <span>租赁面积</span>
                            <span>999</span>
                        </li>
                        <li>
                            <span>店铺名称</span>
                            <span>肯德基</span>
                        </li>
                        <li>
                            <span>店铺编号</span>
                            <span>LG2-183</span>
                        </li>
                        <li>
                            <span>业态</span>
                            <span>餐饮</span>
                        </li>
                        <li>
                            <span>子业态</span>
                            <span>快餐</span>
                        </li>
                        <li>
                            <span>楼层</span>
                            <span>LG2</span>
                        </li>
                        <li>
                            <span>主力店</span>
                            <span>是</span>
                        </li>
                        <li>
                            <span>客单价</span>
                            <span>49</span>
                        </li>
                        <li>
                            <span>租赁期限</span>
                            <span>2020年10月21日</span>
                        </li>
                    </ul>
                    <div className="scrollbars">
                        <span className={this.state.current && "bar-current"}></span>
                        <span ></span>
                    </div>
                </div>
                <div className="block">
                <span className="block-title">店铺基本信息</span>
                    <img src={threeDots} alt="threeDots"/>
                    <ul>
                        <li>
                            <span>公司名称</span>
                            <span>上海肯德基有限公司</span>
                        </li>
                        <li>
                            <span>开店时间</span>
                            <span>2017年6月30日</span>
                        </li>
                        <li>
                            <span>租赁面积</span>
                            <span>999</span>
                        </li>
                        <li>
                            <span>店铺名称</span>
                            <span>肯德基</span>
                        </li>
                        <li>
                            <span>店铺编号</span>
                            <span>LG2-183</span>
                        </li>
                        <li>
                            <span>业态</span>
                            <span>餐饮</span>
                        </li>
                        <li>
                            <span>子业态</span>
                            <span>快餐</span>
                        </li>
                        <li>
                            <span>楼层</span>
                            <span>LG2</span>
                        </li>
                        <li>
                            <span>主力店</span>
                            <span>是</span>
                        </li>
                        <li>
                            <span>客单价</span>
                            <span>49</span>
                        </li>
                        <li>
                            <span>租赁期限</span>
                            <span>2020年10月21日</span>
                        </li>
                    </ul>
                    <div className="scrollbars">
                        <span className={this.state.current && "bar-current"}></span>
                        <span ></span>
                    </div>
                </div>
                <div className="block">
                <span className="block-title">店铺基本信息</span>
                    <img src={threeDots} alt="threeDots"/>
                    <ul>
                        <li>
                            <span>公司名称</span>
                            <span>上海肯德基有限公司</span>
                        </li>
                        <li>
                            <span>开店时间</span>
                            <span>2017年6月30日</span>
                        </li>
                        <li>
                            <span>租赁面积</span>
                            <span>999</span>
                        </li>
                        <li>
                            <span>店铺名称</span>
                            <span>肯德基</span>
                        </li>
                        <li>
                            <span>店铺编号</span>
                            <span>LG2-183</span>
                        </li>
                        <li>
                            <span>业态</span>
                            <span>餐饮</span>
                        </li>

                    </ul>
                    <a href="" className="label-checkdetail">查看详情 &#62;</a>
                </div>
            </div>
        )
    }
}

export default ShopDetailList;