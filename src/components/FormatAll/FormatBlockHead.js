import React from 'react'
import threeDots from '../../assets/icons/threeDots.svg'
import '../../styles/format/formatBlockHead.scss'

class FormatBlockHead extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="block-head">
                <p className="headtitle">{ this.props.blockHeadTitle}</p>
                <div className="head-right">
                    {this.props.blockHeadSearch ?
                        <div className="searchBox">
                            <input type="search" defaultValue="请输入您要搜索的关键词"/>
                            <span className="arrow">&#62;</span>
                        </div> : undefined}
                    {this.props.blockHeadTime ? <p className="month">本月</p> : undefined}
                    <img src={threeDots} alt="threeDots"/>
                </div>
            </div>
        )
    }
}

export default FormatBlockHead;