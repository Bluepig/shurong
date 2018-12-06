import React from 'react'
import FormatBlockHead from '../FormatAll/FormatBlockHead'

const mockdata = [
    {
        shopName: '肯德基',
        abnormalItems: ['销售额', '客流', '坪效']
    },
    {
        shopName: 'ZARA',
        abnormalItems: ['销售额', '客流', '坪效']
    },
    {
        shopName: 'NIKE',
        abnormalItems: ['销售额', '客流', '会员复购率']
    },
    {
        shopName: 'ONLY',
        abnormalItems: ['客流', '坪效']
    },
]

class AbnormalOthers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            abnormalShops: mockdata
        }
    }
    render() {
        return(
            <div className="abnormal-others">
                <FormatBlockHead blockHeadTitle="其他异常列表" blockHeadTime={true} blockHeadSearch={false}/>
                <div className="block-content">
                    <ul className="block-list">
                        {this.state.abnormalShops.map(
                            d =>
                            <li className="block-li">
                                <span className="li-title">{d.shopName}</span>
                                <span className="li-labels">
                                    {d.abnormalItems.map(
                                        i =>
                                        <span>{i}</span>
                                    )}
                                    <a href="" className="label-checkdetail">查看详情 &#62;</a>
                                </span>
                            </li>
                        )}
                        {/* <li className="block-li">
                            <span className="li-title">肯德基</span>
                            <span className="li-labels">
                                <span>销售额</span>
                                <span>客流</span>
                                <span>坪效</span>
                                <a href="" className="label-checkdetail">查看详情 &#62;</a>
                            </span>
                        </li>*/}
                    </ul>
                </div>
            </div>
        )
    }
}

export default AbnormalOthers;