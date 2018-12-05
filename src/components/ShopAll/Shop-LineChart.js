import React from 'react'
import threeDots from '../../assets/icons/threeDots.svg'
import FormatLineChart from '../ShopAll/Format-line-chart'
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

class ShopLineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                pickedDate: new Date().toISOString().substr(0, 10),
                data: mockdata,
                lineColor: lineColor,
                svgWidth: 1000,
                svgHeight: 500,
                margin: 40,
                svgClassName: 'line-chart',
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.chartWrapper = React.createRef();
        this.lineChart = new FormatLineChart();
    }
    handleChange(event) {
        let newState = Object.assign({}, this.state)
        newState.options.pickedDate = event.target.value
        this.setState(newState)
    }


    componentDidMount() {
        this.lineChart.create(this.chartWrapper.current, this.state.options)
    }
    render() {
        return(
            <div className="shop-chart">
                <div className="chart-head">
                    <p>会员与消费分析</p>
                    <div className="chart-head-right">
                        <input type="date" value={this.state.options.pickedDate} onChange={this.handleChange}/>
                        {/* { moment(this.state.options.pickedDate).format() } */}
                        <img src={threeDots} />
                    </div>
                </div>
                <div className="chart-wrapper" ref={this.chartWrapper} >
                </div>
            </div>
        )
    }
}

export default ShopLineChart;