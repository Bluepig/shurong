import React from 'react'
import SelectBar from '../FormatAll/Format-SelectBar'
import FormatLineChart from '../FormatAll/Format-line-chart'
import HoverToolTip from '../FormatAll/Format-tooltip'
import FormatBlockHead from '../FormatAll/FormatBlockHead'
const mockdata = [
    {
        time: new Date(2018, 12, 1),
        day:1,
        food: { bizType: '餐饮', sales: 952.9},
        market: { bizType: '超市', sales: 505.1 },
        service: { bizType: '配套服务', sales: 993.35 },
        retail: { bizType: '零售', sales: 524.35 },
        entertainment: { bizType: '休闲娱乐', sales: 475.9 },
        full: { bizType: 'full', sales: 2000 },
    },
    {
        time: new Date(2018, 12, 2),
        day:2,
        food: { bizType: '餐饮', sales: 352.9 },
        market: { bizType: '超市', sales: 905.1 },
        service: { bizType: '配套服务', sales: 493.35 },
        retail: { bizType: '零售', sales: 624.35 },
        entertainment: { bizType: '休闲娱乐', sales: 275.9 },
        full: { bizType: 'full', sales: 1000 },
    },
    {
        time: new Date(2018, 12, 3),
        day:3,
        food: { bizType: '餐饮', sales: 752.9 },
        market: { bizType: '超市', sales: 305.1 },
        service: { bizType: '配套服务', sales: 693.35 },
        retail: { bizType: '零售', sales: 824.35 },
        entertainment: { bizType: '休闲娱乐', sales: 975.9 },
        full: { bizType: 'full', sales: 1500 },
    },
    {
        time: new Date(2018, 12, 4),
        day:4,
        food: { bizType: '餐饮', sales: 552.9 },
        market: { bizType: '超市', sales: 705.1 },
        service: { bizType: '配套服务', sales: 793.35 },
        retail: { bizType: '零售', sales: 624.35 },
        entertainment: { bizType: '休闲娱乐', sales: 275.9 },
        full: { bizType: 'full', sales: 1300 },
    },
    {
        time: new Date(2018, 12, 5),
        day:5,
        food: { bizType: '餐饮', sales: 952.9 },
        market: { bizType: '超市', sales: 505.1 },
        service: { bizType: '配套服务', sales: 993.35 },
        retail: { bizType: '零售', sales: 524.35 },
        entertainment: { bizType: '休闲娱乐', sales: 475.9 },
        full: { bizType: 'full', sales: 2000 },
    },
    {
        time: new Date(2018, 12, 6),
        day:5,
        food: { bizType: '餐饮', sales: 952.9 },
        market: { bizType: '超市', sales: 505.1 },
        service: { bizType: '配套服务', sales: 993.35 },
        retail: { bizType: '零售', sales: 524.35 },
        entertainment: { bizType: '休闲娱乐', sales: 475.9 },
        full: { bizType: 'full', sales: 2000 },
    },
    {
        time: new Date(2018, 12, 7),
        day:5,
        food: { bizType: '餐饮', sales: 952.9 },
        market: { bizType: '超市', sales: 505.1 },
        service: { bizType: '配套服务', sales: 993.35 },
        retail: { bizType: '零售', sales: 524.35 },
        entertainment: { bizType: '休闲娱乐', sales: 475.9 },
        full: { bizType: 'full', sales: 2000 },
    },
];

const lineColor = {
    food: '#5DDCC0',
    market: '#F2A630',
    service: '#4C8FDA ',
}
const selectitems1 = ['餐饮', '超市', '配套服务', '休闲娱乐'];
const selectitems2 = ['肯德基', '麦当劳'];

class AbnormalDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                pickedDate: new Date().toISOString().substr(0, 10),
                data: mockdata,
                lineColor: lineColor,
                svgWidth: 500,
                svgHeight: 250,
                lineWeight: 1,
                margin: 40,
                svgClassName: 'line-chart',
            }
        }
        this.chartWrapper = React.createRef();
        this.lineChart = new FormatLineChart();
    }
    componentDidMount() {
        this.lineChart.create(this.chartWrapper.current, this.state.options)
    }
    render() {
        return(
            <div className="abnormal-detail">
                <FormatBlockHead blockHeadTitle="异常详情" blockHeadTime={true} blockHeadSearch={true}/>
                <div className="two-selections">
                    <SelectBar selectitems={selectitems1} />
                    <SelectBar selectitems={selectitems2} />
                </div>
                <div className="content-main">
                    <p>
                    现代管理理论认为，管理是在社会组织中，以人为核心，为实现预定目标而进行的协调活动。具体来说，管理的目的是实现组织目标，本质是协调，而中心是人。组织内部的分工与合作是管理的前提。
                    店铺作为一种社会组织，其特点在于它的赢利性，因此店铺管理的目标就是赢得利润。店铺管理活动的中心是人，由人来进行，并服务于人，
                    要充分认识人的需求的丰富性和复杂性。改善薪资收入、工作环境等物质因素当然重要，但是得到认可与尊重、情感交流、技能获得长进等精神方面的因素也不容忽视。
                    </p>
                    <div className="chart-wrapper" ref={this.chartWrapper} >
                        <HoverToolTip />
                    </div>
                </div>
            </div>
        )
    }
}

export default AbnormalDetail;